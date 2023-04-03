import logo from './logo.svg';
import './App.css';
import { AiOutlineMail  } from "react-icons/ai"
import { TfiHeadphone  } from "react-icons/tfi"

function App() {
  return (
    <div className="App">
         <div className="content">
                <h1>Contact</h1>
                <div className="phone">
                      
                      <span className="imp-detail"> <TfiHeadphone/>   +01 023 345 678</span>
                      <p>Monday to Fridat , from 9am to 8pm and Saturday , from 9am to 5pm (toll free)</p>
                </div>
                <div className="mail">
                      
                      <span className="imp-detail" >< AiOutlineMail />        hello@dream-theme.com</span>
                      <p>Do you have any queries or questions ? Send us an email and we will reply to you as soon as possible</p>
                </div>
                <div className="form-block">
                    <form>
                         
                              <label for="name"> Name:
                                     <input type="text" placeholder='Name' id="name" className="input_contact"/>
                              </label>
                       
                              <label for="mail"> Email :
                                      <input type="email" placeholder='Email' id="mail" className="input_contact" />
                              </label>
                           
                             <label for="msg"> Message :
                                     <textarea className='contact-form-textarea'></textarea>
                              </label>
                              <label>
                                 <input type="checkbox" className="textbox input_contact" ></input>
                                 Subscribe for Seven Shop news
                              </label>
                              <button>Send message</button>
                             
                    </form>
                </div>
         </div>
         <div className="aside">
              <h3>About our Shop</h3>
              <h3>News</h3>
              <h3>Contact</h3>
              <h3>Payment</h3>
              <h3>Delivery</h3>
              <h3>Order tracking</h3>
              <h3>Exchanges & returns</h3>
              <h3>Maintainence Page</h3>
              <h3>Demo design system</h3>
         </div>
    </div>
  );
}

export default App;
