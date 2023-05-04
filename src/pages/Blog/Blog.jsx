import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});
const Blog = () => {
    return (
        <div className='text-center w-50 mx-auto mb-5'>
            <div className='w-100'>
        <Document file="your-file.pdf">
            <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>
                <h1>Tell us the differences between uncontrolled and controlled components.</h1>
            <p>A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the component's value.

                An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the component's value.</p>

            <br />
                </Text>

            </View>
            <View style={styles.section}>
                <Text><h1>How to validate React props using PropTypes</h1>
            <p>
                When props are passed to a React component, they are checked against the type definitions configured in the propTypes property.To pass props between components, you can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function. We can also use PropTypes to define more complex shapes of props, like objects with specific properties, or arrays with specific types of items.When an invalid value is passed for a prop, a warning is displayed on the JavaScript console.
            </p>
            <br /></Text>

            </View>
            <View style={styles.section}>
                <Text>
                <h1>How to validate React props using PropTypes</h1>
            <p>
                When props are passed to a React component, they are checked against the type definitions configured in the propTypes property.To pass props between components, you can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function. We can also use PropTypes to define more complex shapes of props, like objects with specific properties, or arrays with specific types of items.When an invalid value is passed for a prop, a warning is displayed on the JavaScript console.
            </p>
            <br />
                </Text>

            </View>
            <View style={styles.section}>
                <Text><h1>What is a custom hook, and why will you create a custom hook?</h1>
            <p>A custom hook is a function in React that allows you to reuse stateful logic across multiple components. Custom hooks are a convenient method to encapsulate hook-related behavior that may be used across components.Additionally, if we have a component in which we have two or more separate pieces of useEffect logic going on, we might want to consider putting them into custom hooks to separate and name them, even if this isn’t logic that will be shared by any other component.</p></Text>

            </View>

            </Page>
            <button onClick={() => window.open('your-file.pdf')}>Download PDF</button>
        </Document>
        
           
            
            
            
        </div>
    </div>
    );
};

export default Blog;