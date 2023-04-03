import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { debounce } from 'lodash';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string().required('Name is required'),
	phone: Yup.string()
		.min(10, 'Phone number should be withing 10 to 12 digits')
		.max(12, 'Phone number should be withing 10 to 12 digits')
		.matches(/^[+]?[0-9]+$/, 'Phone number should be numeric')
		.required('Phone is required'),
	email: Yup.string().email('Email is invalid').required('Email is required'),
});

export default function autosaveform({}) {
	const [notifyDataSaved, setNotifyDataSaved] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
		},
		onSubmit: (values) => {
			//handle submit. Eg: server call
			console.log(values);
			setNotifyDataSaved(true);
		},
		validationSchema: validationSchema,
	});

	const debouncedSave = debounce(formik.handleSubmit, 1000);

	useEffect(() => {
		setNotifyDataSaved(false);
		console.log('UseEffect called: formik.values', formik.values);
		debouncedSave();
		return () => {
			debouncedSave.cancel();
		};
	}, [formik.values]);

	return (
		<div className='form-control w-full max-w-xs'>
			<form onSubmit={formik.handleSubmit}>
				<label className='label'>
					<span className='label-text'>What is your name?</span>
				</label>
				<input
					className='input input-bordered w-full max-w-xs'
					placeholder='Type here'
					type='text'
					name='name'
					onChange={formik.handleChange}
					value={formik.values.name}
				/>
				{formik.errors.name && formik.touched.name ? (
					<div className=' text-sm text-red-500'>{formik.errors.name}</div>
				) : null}

				<label className='label'>
					<span className='label-text'>What is your email?</span>
				</label>
				<input
					className='input input-bordered w-full max-w-xs'
					placeholder='youremail@youremail.com'
					type='email'
					name='email'
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				{formik.errors.email && formik.touched.email ? (
					<div className=' text-sm text-red-500'>{formik.errors.email}</div>
				) : null}

				<label className='label'>
					<span className='label-text'>What is your phone?</span>
				</label>
				<input
					className='input input-bordered w-full max-w-xs'
					placeholder='+94112123456'
					type='tel'
					name='phone'
					onChange={formik.handleChange}
					value={formik.values.phone}
				/>
				{formik.errors.phone && formik.touched.phone ? (
					<div className=' text-sm text-red-500'>{formik.errors.phone}</div>
				) : null}
			</form>
			<p
				className='text-sm text-green-700 bg-green-300'
				hidden={notifyDataSaved ? false : true}
			>
				Data saved.
			</p>
		</div>
	);
}
