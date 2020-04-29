const clearPreview = (req, res) => {
  // Clears the preview mode cookies.
  res.clearPreviewData()
  res.status(200)
  res.end()
}

export default clearPreview
