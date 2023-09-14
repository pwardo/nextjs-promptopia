import Link from 'next/link';

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit
}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text tex-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share your AI prompts with the world
      </p>
      <form
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glasmorphism'
        onSubmit={handleSubmit}
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
          <textarea 
            className='form_textarea'
            value={post.prompt}
            onChange={(e) => setPost({...post, prompt: e.target.value})}
            placeholder='Enter your AI Prompt here'
            required
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag <span className='font-normal'>(#webdevelopment, #AWS, #NextJS, #ReactJS)</span>
          </span>
          <input 
            className='form_input'
            value={post.tag}
            onChange={(e) => setPost({...post, tag: e.target.value})}
            placeholder='#tag'
            required
          />

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href='/' className='text-gray-500 text-sm'>
              Cancel
            </Link>
            <button
              className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
              type={type}
              disabled={submitting}
            >
              {submitting ? `${type}...` : type}
            </button>
          </div>
        </label>
      </form>
    </section>
  )
}

export default Form;