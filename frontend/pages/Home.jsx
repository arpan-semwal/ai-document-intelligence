import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to indigo-100'>
      <div className='max-w-7xl mx-auto px-4 py-20'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-gray-900 mb-6'>AI-Powered Document Intelligence</h1>
          <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Upload your documents , ask questions, and get instant AI-Powered insights.
            Chat with your PDFs like never before
          </p>
          <div className='flex gap-4 justify-center'>
            <Link to="/register" className='bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition'>Get Started Free</Link>
            <Link to="/login" className='bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition'>Sign In</Link>
          </div>
        </div>
      </div>





    {/*Features Cards */}

    <div className='grid md:grid-cols-3 gap-8 mt-20'>
      <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition'>
        <div className='text-4xl mb-4'>📄</div>
        <h3 className='text-xl font-semibold mb-2'>Upload any document</h3>
        <p>Support for PDF, DOCX, images, and more. Drag and drop or click to upload.</p>
      </div>
      <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition'>
        <div className='text-4xl mb-4'>🤖</div>
        <h3 className='text-xl font-semibold mb-2'>AI-Powered Chat</h3>
        <p>Ask questions in natural language. Get accurate answeres with source citations</p>
      </div>
      <div className='bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition'>
        <div className='text-4xl mb-4'>📊</div>
        <h3 className='text-xl font-semibold mb-2'>Smart Insights</h3>
        <p>Automatic summaries, key points extraction, and powerful analytics</p>
      </div>
    </div>





    </div>
  )
}

export default Home