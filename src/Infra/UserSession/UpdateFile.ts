import * as firebaseStorage from 'firebase/storage'
import { getDownloadURL, uploadBytesResumable } from 'firebase/storage'

interface Params {
  file: File
  fileName: string
  userId: number
}

export const createUploadTask: ({
  file,
  fileName,
  userId,
}: Params) => firebaseStorage.UploadTask | null = ({
  file,
  fileName,
  userId,
}: Params) => {
  const extension = file.name.split('.').pop()

  const refPath = makeUploadRefPath(fileName, extension, userId)

  if (refPath === null) return null

  const storageRef = firebaseStorage.ref(firebaseStorage.getStorage(), refPath)

  return uploadBytesResumable(storageRef, file)
}

export const uploadFile: (
  uploadTask: firebaseStorage.UploadTask
) => Promise<string | null> = async (
  uploadTask: firebaseStorage.UploadTask
) => {
  const ref = (await uploadTask).ref

  const fileUrl = await getDownloadURL(ref)
    .then((url) => url)
    .catch(() => Promise.reject(Error('アップロードに失敗しました')))

  return fileUrl
}

function makeUploadRefPath(
  fileName: string,
  extension: string | undefined,
  userId: number
): string | null | undefined {
  if (
    fileName == '履歴書' ||
    fileName == '職務経歴書' ||
    fileName == '推薦状'
  ) {
    return `JobSeekers/${userId}/${fileName}.${extension}`
  }
}
