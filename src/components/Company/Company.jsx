import React, { useState } from 'react';
import './Company.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (page) => {
    onPageChange(page);
  };

  return (
    <div style={styles.pagination}>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          style={{ ...styles.pageItem, ...(currentPage === index + 1 ? styles.active : {}) }}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button style={styles.pageItem} onClick={() => handlePageClick(currentPage + 50)}>
        +50
      </button>
    </div>
  );
};

const styles = {
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.6em',
    marginBottom:'5em',
    gap: '0.5em',
  },
  pageItem: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '4px',
    padding: '0.5em 1em',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  active: {
    backgroundColor: 'black',
    color: 'white',
  },
  '@media (max-width: 600px)': {
    pageItem: {
      padding: '0.5em',
      fontSize: '0.8em',
    },
  },
};



const Company = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total pages for pagination

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='company'>
      <div className="company1">
        <div className="left">
          <span>Words That Inspire,<br/> <span1>Ideas That Thrive</span1></span>
          <p>We believe in the power of words to transform thoughts into meaningful conversations. Our blog is a vibrant space where stories come alive, 
            ideas are explored, and inspiration flows freely. Whether you're here to find a fresh perspective, engage with thought-provoking content, or simply enjoy a good read, you've come to the right place.</p>
        </div>

        <div className="right">
          <img src="src/components/Company/image/25025577_7038056 1 (1).png" alt="" />
        </div>
      </div>

      <div className="company2">
        <div className="company2-left">
          <img src="src/components/Company/image/Component 9.png" alt="" />
        </div>
        <div className="company2-right">
          <span>Introduction</span>
          <p>Understanding the intricacies of HIPAA compliance is crucial for any healthcare-related organization. Ensuring the privacy and security of patient health information is not only a legal obligation but also a cornerstone of patient trust and the integrity of your practice. This comprehensive guide outlines the steps to achieve and maintain HIPAA compliance, focusing on safeguarding sensitive health information.</p>
        </div>
      </div>

      <div className="company3">
        <div className="company3-first">
          <div className="image">
            <img src="src/components/Company/image/Rectangle 6.png" alt="" />
          </div>
          <div className="info">
            OpenAI Unveils<br/>
            GPT-4o:<br/>
            REVOLUTIONIZING <br/>
            CONVERSATIONAL AI
          </div>
        </div>
        <div className="company3-first">
          <div className="image">
            <img src="src/components/Company/image/Rectangle 6 (1).png" alt="" />
          </div>
          <div className="info">
            OpenAI Unveils<br/>
            GPT-4o:<br/>
            REVOLUTIONIZING <br/>
            CONVERSATIONAL AI
          </div>
        </div>
        <div className="company3-first">
          <div className="image">
            <img src="src/components/Company/image/Rectangle 6 (2).png" alt="" />
          </div>
          <div className="info">
            OpenAI Unveils<br/>
            GPT-4o:<br/>
            REVOLUTIONIZING <br/>
            CONVERSATIONAL AI
          </div>
        </div>
        <div className="company3-first">
          <div className="image">
            <img src="src/components/Company/image/Rectangle 6 (3).png" alt="" />
          </div>
          <div className="info">
            OpenAI Unveils<br/>
            GPT-4o:<br/>
            REVOLUTIONIZING <br/>
            CONVERSATIONAL AI
          </div>
        </div>
        <div className="company3-first">
          <div className="image">
            <img src="src/components/Company/image/Rectangle 6 (4).png" alt="" />
          </div>
          <div className="info">
            OpenAI Unveils<br/>
            GPT-4o:<br/>
            REVOLUTIONIZING <br/>
            CONVERSATIONAL AI
          </div>
        </div>
        <div className="company3-first">
          <div className="image">
            <img src="src/components/Company/image/Rectangle 6 (5).png" alt="" />
          </div>
          <div className="info">
            OpenAI Unveils<br/>
            GPT-4o:<br/>
            REVOLUTIONIZING <br/>
            CONVERSATIONAL AI
          </div>
        </div>
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default Company;
