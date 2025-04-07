const deleteUser = (key) => {
    fetch(`https://${your-project-id}.firebaseio.com/users/${key}.json`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => {
        console.log('User deleted successfully');
        // Remove the user entry from the displayed table
        removeUserFromTable(key); 
    })
    .catch(error => console.error('Error deleting user', error));
};

function removeUserFromTable(key) {
    const userRow = document.querySelector(`[data-key="${key}"]`);
    if (userRow) {
        userRow.remove();
    }
}
