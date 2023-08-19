
const image_base_path = "https://cdn.brettspielsonntag.at";

function get_image_paths(prefix, start, end) {
return Array(end - start + 1)
  .fill()
  .map((e, i) => `${image_base_path}/${prefix}/${("00" + (i + start)).slice(-2)}.jpeg`);
}

function get_image_path(prefix, name) {
  return `${ image_base_path }${prefix ? "/" + prefix : ""}/${name}`;
}


const logo_path = `${ image_base_path }/logo.png`;
const logo_alt_text = "Eine Gruppe verschiedenster Wesen sitzt um ein Lagerfeuer herum: Darth Vader, Deadpool, ein Baby-C'Thulhu, eine Maus und ein paar Meeple.";

export { get_image_paths, get_image_path, logo_path, logo_alt_text };


