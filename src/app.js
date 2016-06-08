var SearchFaq = React.createClass({

    //Initial State of input
    getInitialState: function(){
        return { searchQuestion: '' };
    },

    //Changing value of input box
    filterResults: function(event){
        this.setState({searchQuestion:event.target.value});
    },

    render: function() {

        var faqLibrary = this.props.questionList,
            searchQuestion = this.state.searchQuestion.trim().toLowerCase();

        // Searching and Filtering Results
        if(searchQuestion.length > 0){

            faqLibrary = faqLibrary.filter(function(query){
                return query.question.toLowerCase().match( searchQuestion );
            });
        }

        return <div>
                  <div id="topSection">
                    <div id="searchSection">
                      <h1>How can we help?</h1>
                      <input id="searchBox" type="text" value={this.state.searchQuestion} onChange={this.filterResults} placeholder="Search FAQ" />
                    </div>
                  </div>

                  <div>
                    <ul id="listQuestion">
                      { faqLibrary.map(function(query){
                          if (query.length === 0) {
                            console.log('none');
                          } else {
                          return <li className ="question" key={query.id}><span>{query.question}</span>

                          <p className="answer">{query.content}</p>
                          </li>
                          }

                      }) }
                    </ul>
                  </div>
              </div>;
    }
});


ReactDOM.render(
    <SearchFaq questionList={ faqLibrary } />,
    document.getElementById('container')
);
