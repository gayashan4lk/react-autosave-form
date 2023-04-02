import { Autosaveform, SubmitForm } from '../components';

export default function ProfilePage() {
	return (
		<>
			<div className='p-5 m-10 border-2 rounded-lg'>
				<h2 className='text-lg font-bold'>Submit Form</h2>
				<SubmitForm />
			</div>
			<div className='p-5 m-10 border-2 rounded-lg'>
				<h2 className='text-lg font-bold'>AutoSave Form</h2>
				<Autosaveform />
			</div>
			<a className='link link-hover' href='/'>
				Go to Home
			</a>
		</>
	);
}
