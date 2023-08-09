
const image_base_path = "https://cdn.brettspielsonntag.at";

function get_image_paths(prefix, start, end) {
return Array(end - start + 1)
  .fill()
  .map((e, i) => `${image_base_path}/${prefix}/${("00" + (i + start)).slice(-2)}.jpeg`);
}

function get_image_path(prefix, name) {
  return `${ image_base_path }/${prefix}/${name}`;
}


function get_logo() {
  return `${ image_base_path }/logo.png`;
}

export { get_image_paths, get_image_path, get_logo };


