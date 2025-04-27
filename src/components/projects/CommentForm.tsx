import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

type CommentFormProps = {
  projectId: number;
  onCommentSubmit: (data: { userName: string; content: string }) => Promise<void>;
};

type FormData = {
  userName: string;
  content: string;
};

const CommentForm: React.FC<CommentFormProps> = ({ projectId, onCommentSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await onCommentSubmit(data);
      reset();
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-700">
          Ваше ім'я *
        </label>
        <input
          type="text"
          id="userName"
          {...register('userName', { required: "Обов'язкове поле" })}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none ${
            errors.userName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.userName && (
          <p className="mt-1 text-sm text-red-500">{errors.userName.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-700">
          Ваш коментар *
        </label>
        <textarea
          id="content"
          rows={4}
          {...register('content', {
            required: "Обов'язкове поле",
            minLength: { value: 10, message: 'Коментар має містити щонайменше 10 символів' },
          })}
          className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none ${
            errors.content ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.content && (
          <p className="mt-1 text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-2 animate-spin" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Відправляємо...
          </span>
        ) : (
          <span className="flex items-center">
            <Send className="w-5 h-5 mr-2" />
            Додати коментар
          </span>
        )}
      </button>
    </form>
  );
};

export default CommentForm;