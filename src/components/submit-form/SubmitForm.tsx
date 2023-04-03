import { Formik, Form, Field } from 'formik';
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

export default function SubmitForm({}) {
	const handleSubmit = (values: any) => {
		saveFormData(values);
	};

	const saveFormData = (data: any) => {
		console.log(data);
	};

	return (
		<div className='form-control w-full max-w-xs'>
			<Formik
				initialValues={{
					name: '',
					email: '',
					phone: '',
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ handleChange, values, errors, touched }) => (
					<Form>
						<label className='label'>
							<span className='label-text'>What is your name?</span>
						</label>
						<Field
							className='input input-bordered w-full max-w-xs'
							placeholder='Type here'
							type='text'
							name='name'
							onChange={handleChange}
							value={values.name}
						/>
						{errors.name && touched.name ? (
							<div className=' text-sm text-red-500'>{errors.name}</div>
						) : null}

						<label className='label'>
							<span className='label-text'>What is your email?</span>
						</label>
						<Field
							className='input input-bordered w-full max-w-xs'
							placeholder='youremail@youremail.com'
							type='email'
							name='email'
							onChange={handleChange}
							value={values.email}
						/>
						{errors.email && touched.email ? (
							<div className=' text-sm text-red-500'>{errors.email}</div>
						) : null}

						<label className='label'>
							<span className='label-text'>What is your phone?</span>
						</label>
						<Field
							className='input input-bordered w-full max-w-xs'
							placeholder='+94112123456'
							type='tel'
							name='phone'
							onChange={handleChange}
							value={values.phone}
						/>
						{errors.phone && touched.phone ? (
							<div className=' text-sm text-red-500'>{errors.phone}</div>
						) : null}

						<button type='submit' className='btn btn-sm'>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
