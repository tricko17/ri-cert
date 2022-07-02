import PropTypes from "prop-types";
import './App.css';

function App({ headline, showLogos, backgroundImage, qrcode }) {
  return (
    <div class="container-fluid">
        <div class="book">
            <div class="page" style={{ backgroundImage: `url('${backgroundImage}')` }}>
                
            </div>
        </div>
    </div>

  );
}

App.propTypes = {
  headline: PropTypes.string,
  showLogos: PropTypes.string,
  backgroundImage: PropTypes.string,
}

App.defaultProps = {
  headline: 'ABDULLAH ARIEF SYAHPUTRA PRAWIRANEGARA SUBAMBANG HARIS',
  showLogos: true,
  backgroundImage: 'http://ruang-ilmiah.oss-ap-southeast-5.aliyuncs.com/template_cert_kc/2022042910394007.jpg',
  qrcode: ''
}

export default App;
