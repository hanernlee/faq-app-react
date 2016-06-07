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
                  <input type="text" value={this.state.searchQuestion} onChange={this.filterResults} placeholder="Type here" />

                  <ul id="listQuestion">
                    { faqLibrary.map(function(query){
                        return <li className ="question" key={query.id}>{query.question}
                        <p className="answer">{query.content}</p>
                        </li>
                    }) }
                  </ul>
              </div>;
    }
});


ReactDOM.render(
    <SearchFaq questionList={ faqLibrary } />,
    document.getElementById('container')
);
