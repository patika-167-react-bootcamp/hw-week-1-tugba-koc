const folders = [
  {
    id: 5,
    name: "Klasör 1",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 18, name: "manzara.jpg" },
    ],
  },
  {
    id: 6,
    name: "Klasör 2",
    files: [
      { id: 21, name: "foto.png" },
      { id: 22, name: "dosya.xls" },
    ],
  },
  {
    id: 7,
    name: "Klasör 3",
  },
];

let maxId = 0;

folders.forEach(function (el) {
  if (el.files) {
    el.files.forEach(function (element) {
      if (element.id > maxId) {
        maxId = element.id;
      }
    });
  }
});

// MOVE FUNCTION START

function move(id, newFolderId) {
  // find based folder in folders
  const basedFolder = folders.find(function (folder) {
    if (folder.files) {
      return folder.files.find((file) => file.id === Number(id));
    }
  });

  // find index file in based folder
  let index;
  basedFolder &&
    (index = basedFolder.files.findIndex((el) => el.id === Number(id)));

  // find target folder in folders
  const targetFolder = folders.find(
    (folder) => folder.id === Number(newFolderId)
  );

  // if target folder or based folder is not found
  if (!index && !targetFolder) {
    throw "Target folder and file not found";
  } else if (!targetFolder) {
    throw "Target folder not found";
  } else if (!index) {
    throw "File not found";
  } else if (basedFolder.id === targetFolder.id) {
    throw "Target folder is same as based folder";
  }

  // find move file
  let passedFile = basedFolder.files[index];

  // change file id
  maxId++;
  passedFile.id = Number(maxId);

  // remove file from based folder
  basedFolder.files.splice(index, 1);

  // create array of files in target folder if not exist
  if (!Object.keys(targetFolder).includes("files")) {
    targetFolder.files = [];
  }

  // add file to target folder
  targetFolder.files.push(passedFile);

  return folders;
}

// MOVE FUNCTION END

// COPY FUNCTION START

function copy(id, newFolderId) {
  // find based folder in folders
  const basedFolder = folders.find(function (folder) {
    if (folder.files) {
      return folder.files.find((file) => file.id === Number(id));
    }
  });

  // find index file in based folder
  let index;
  basedFolder &&
    (index = basedFolder.files.findIndex((el) => el.id === Number(id)));

  // find target folder in folders
  const targetFolder = folders.find(
    (folder) => folder.id === Number(newFolderId)
  );

  // if target folder or based folder is not found
  if (!index && !targetFolder) {
    throw "Target folder and file not found";
  } else if (!targetFolder) {
    throw "Target folder not found";
  } else if (!index) {
    throw "File not found";
  } else if (basedFolder.id === targetFolder.id) {
    throw "Target folder is same as based folder";
  }

  // find move file
  let passedFile = basedFolder.files[index];

  // change file id
  maxId++;
  passedFile.id = Number(maxId);

  // create array of files in target folder if not exist
  if (!Object.keys(targetFolder).includes("files")) {
    targetFolder.files = [];
  }

  // add file to target folder
  targetFolder.files.push(passedFile);

  return folders;
}

// COPY FUNCTION END

// REMOVE FUNCTION START

function remove(id) {
  // find based folder in folders
  const basedFolder = folders.find(function (folder) {
    if (folder.files) {
      return folder.files.find((file) => file.id === Number(id));
    }
  });

  // find index file in based folder
  let index;
  basedFolder &&
    (index = basedFolder.files.findIndex((el) => el.id === Number(id)));

  // if target folder or based folder is not found
  if (index < 0) {
    throw "File not found";
  }

  // remove file from based folder
  basedFolder.files.splice(index, 1);

  return folders;
}

// REMOVE FUNCTION END

// REMOVE FOLDER FUNCTION START

function removeFolder(folderId){
  const index = folders.findIndex((el) => el.id === Number(folderId));
  if (index < 0) {
    throw "Folder not found";
  }
  folders.splice(index, 1);
  return folders;
}

// REMOVE FOLDER FUNCTION END

// TRY CATCH BLOCK START

try {
  console.log(move(18, 6));
  console.log(copy(18, 7));
  console.log(remove(17));
  console.log(removeFolder(6));
} catch (err) {
  console.log(err);
}

// TRY CATCH BLOCK END