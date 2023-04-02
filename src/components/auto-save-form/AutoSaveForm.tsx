import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { debounce } from 'lodash';

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
