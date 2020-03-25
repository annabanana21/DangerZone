class BinarySearchTree 
{ 
    constructor() { 
        // root of a binary seach tree 
        this.root = null; 
    } 

    // helper method which creates a new node to  
    // be inserted and calls insertNode 
    insert(story) 
    {  
                
        // root is null then node will become root
        if(this.root === null) 
            this.root = story; 
        else
            // finds the appropriate position
            this.insertNode(this.root, story); 
    } 
  
    // Method to insert a node in a tree  
    insertNode(node, newNode) 
    { 
        // if the data is less than the node 
        // data move left of the tree  
        if (newNode.value < node.value) 
        { 
            // if left is null insert node here 
            if (node.left === null) 
                node.left = newNode; 
            else
    
                // if left is not null recurr until  
                // null is found 
                this.insertNode(node.left, newNode);  
        } 
    
        // if the data is more than the node 
        // data move right of the tree  
        else
        { 
            // if right is null insert node here 
            if(node.right === null) 
                node.right = newNode; 
            else
    
                // if right is not null recurr until  
                // null is found 
                this.insertNode(node.right,newNode); 
        } 
    } 
  
} 

module.exports = BinarySearchTree;



