import React from 'react';

export default function LoadingIcon() {
	return (
		<div class="d-flex justify-content-center">
			<span class="sr-only">Ładowanie...</span>
			<div class="spinner-border m-5" role="status"></div>
		</div>
	);
}
