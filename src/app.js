var SearchFaq = React.createClass({

    getInitialState: function(){
        return { searchQuestion: '' };
    },

    filterResults: function(event){
        this.setState({searchQuestion:event.target.value});
    },

    render: function() {

        var faqLibrary = this.props.questionList,
            searchQuestion = this.state.searchQuestion.trim().toLowerCase();

        if(searchQuestion.length > 0){

            faqLibrary = faqLibrary.filter(function(query){
                return query.question.toLowerCase().match( searchQuestion );
            });
        }

        return <div>
                  <div id="topSection">
                    <div id="searchSection">
                      <h1>How can we help?</h1>
                      <input id="searchBox" type="text" value={this.state.searchQuestion} onChange={this.filterResults} placeholder="Search" />
                    </div>
                  </div>

                  <div>
                    <ul id="listQuestion">
                      { faqLibrary.map(function(query){

                          return <li className ="question" key={query.id}><span>{query.question}</span>

                          <p className="answer">{query.content}</p>
                          </li>

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
