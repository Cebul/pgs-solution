import React from 'react'

const styles = {
  container: {
    backgroundColor: "#2C2C2C",
    color: "#949494",
    fontSize: 12,
    height: 111,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center"
  },
  powered: {
    width: 300,
    height: 200,
    borderTop: "1px solid #949494",
    margin: "0 auto",
    marginTop: 40,
    paddingTop: 10
  }
}

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.powered}>Powered by Kamil Cebula</div>
    </div>
  )
}

export default Footer
