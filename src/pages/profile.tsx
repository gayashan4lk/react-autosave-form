import { Autosaveform, SubmitForm } from '../components';

export default function ProfilePage() {
	return (
		<>
			<div>
				<h1>Submit Form</h1>
				<SubmitForm />
			</div>
			<div>
				<h1>AutoSave Form</h1>
				<Autosaveform />
			</div>
			<a href='/'>Home</a>
		</>
	);
}
