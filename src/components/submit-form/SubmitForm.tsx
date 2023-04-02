import { Formik, Form, Field } from 'formik';

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
				onSubmit={handleSubmit}
			>
				{({ handleChange, values }) => (
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

						<button type='submit' className='btn btn-sm'>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
}
