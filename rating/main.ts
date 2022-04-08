import './css/style.css';
import '../css/util.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ratingComponent = document.getElementById('rating-component');
const ratingForm = document.getElementById('rating-form');
const ratingFeedbackComponent = document.getElementById(
  'rating-feedback-component'
);

ratingForm?.addEventListener('submit', function (event: SubmitEvent) {
  event.preventDefault();

  const formData = new FormData(this as HTMLFormElement);
  console.log(formData.get('rating'));
});

ratingForm?.addEventListener('formdata', function (event: FormDataEvent) {
  ratingComponent?.classList.add('rating_hidden');
  ratingFeedbackComponent?.classList.remove('rating-feedback_hidden');

  const rating = event.formData.get('rating');
  const ratingValueField = ratingFeedbackComponent?.querySelector(
    '.rating-feedback__rating-value'
  );
  if (ratingValueField != null) {
    ratingValueField.textContent = `You selected ${rating} out of 5`;
  }
});
