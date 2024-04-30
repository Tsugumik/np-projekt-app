import { describe, it, test } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Article from '$lib/Article.svelte';
import EditForm from '$lib/forms/EditForm.svelte';
import FormTextArea from '$lib/FormTextArea.svelte';
import FormInput from '$lib/FormInput.svelte';


test('displays article content and title', async ()=>{
	const { getByText } = render(Article, {article: {id: 1, title: 'test', content: 'test content'}});
	getByText('test');
	getByText('test content');
});

test('displays article edit form', async ()=>{
	const { getByText } = render(EditForm, {article: {id: 1, title: 'test', content: 'test content'}});
	getByText('test');
	getByText('test content');
});

describe('Form input elements tests', async ()=>{
	it('Text area placeholder test', async ()=>{
		const { getByPlaceholderText } = render(FormTextArea, {placeholder: 'test_placeholder', idname: 'test_idname'});
		getByPlaceholderText('test_placeholder');
	});

	it('Text area value test', async ()=>{
		const { getByDisplayValue } = render(FormTextArea, {placeholder: 'test_placeholder', idname: 'test_idname', value: 'test_value'});
		getByDisplayValue('test_value');
	});

	it('Form input placeholder test', async ()=>{
		const { getByPlaceholderText } = render(FormInput, {placeholder: 'test_title_placeholder', idname: 'test_idname', value: 'test_title_value'});
		getByPlaceholderText('test_title_placeholder');
	});

	it('Form input value test', async ()=>{
		const { getByDisplayValue } = render(FormInput, {placeholder: 'test_title_placeholder', idname: 'test_idname', value: 'test_title_value_sec'});
		getByDisplayValue('test_title_value_sec');
	});
});