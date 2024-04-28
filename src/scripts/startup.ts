function startup() {
  // Initialize the reloaded (reloads the website every 6 hours)
  const reloadTimeout = setTimeout(() => location.reload(), 1000 * 60 * 60 * 6);
}

export default startup;
