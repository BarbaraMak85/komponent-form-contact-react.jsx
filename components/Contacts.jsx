class Contacts extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        var contacts = this.props.items.map(function (contact) {
            return <Contact item={contact} key={contact.id}/>
            
        });
        return (
            <ul className="contactList" >
                {contacts}
            </ul>
        )
    }
}


// var Contacts = React.createClass({
//     propTypes: {
//         items: React.PropTypes.array.isRequired,
//     },

//     render: function() {
//         var contacts = this.props.items.map(function(contact) {
//             return React.createElement(Contact, { item: contact, key: contact.id });
//         });

//         return (
//             React.createElement('ul', { className: 'contactsList' }, contacts)
//         );
//     }
// });