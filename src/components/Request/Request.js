import React from "react";
import './Request.css';

export default class Request extends React.Component {
  constructor(props) {
    super(props);
    this.data = null;
  }

  async fetchData(url) {   
    try {
      this.addLoader();
      const response = await fetch(url);
          
      if (!response.ok) {
        throw new Error(response.statusText);
      }
          
      const responseData = await response.json();
      
      this.data = responseData;
    } catch(e) {
      console.error(e);
    } finally {
      this.removeLoader();
    }

    return this.data;
  }

  addLoader() {
    const loaderDiv = document.createElement('div');
    const loaderSpan = document.createElement('span');

    loaderDiv.classList.add('user__loader');
    loaderSpan.classList.add('loader');
    loaderDiv.prepend(loaderSpan);
    document.querySelector('.user').append(loaderDiv);
  }

  removeLoader() {
    document.querySelector('.user__loader').remove()
  }
}