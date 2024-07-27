import React from 'react';
import './about.css';
import Chip from '@mui/material/Chip';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

function About() {
  return (
    <div className="col-md-5 preview-highlighter" style={{ textAlign: 'center' }}>
      <ul className="list-unstyled contact-as-details-container">
        <li>ספסופה, ישראל</li>
      </ul>
      <ul className="list-unstyled contact-as-details-container">
      <span dir="ltr">+972-054-909-4600</span>
      <Chip icon={<LocalPhoneRoundedIcon />}  />
        <li>
          <a href="mailto:y0555567831@gmail.com">
            <i
              className="svg-m s123-icon-converter fa-fw"
              data-icon-name="envelope-o"
              style={{
                mask: "url('https://images.cdn-files-a.com/ready_uploads/svg/envelope-o.svg?v=2')",
                WebkitMask: "url('https://images.cdn-files-a.com/ready_uploads/svg/envelope-o.svg?v=2')"
              }}
              alt="envelope-o"
            >
              &nbsp;
            </i>
            y0555567831@gmail.com
          </a>
        </li>
      </ul>
      <br />
      <ul className="list-inline social-details-container">
        <li>
          <a
            href="https://instagram.com/naomiboutique_suites?utm_source=qr&igshid=OGU0MmVlOWVjOQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="svg-m s123-icon-converter fa-2x fa-fw"
              data-icon-name="instagram"
              style={{
                mask: "url('https://images.cdn-files-a.com/ready_uploads/svg/brand-1/instagram.svg?v=2')",
                WebkitMask: "url('https://images.cdn-files-a.com/ready_uploads/svg/brand-1/instagram.svg?v=2')"
              }}
              alt="site123-image-icon system-svg-icons brand-1 instagram"
            >
              &nbsp;
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default About;
