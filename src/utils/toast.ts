enum ToastStatusEnum {
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning"
}

enum ToastPosition {
  LEFT = "bottom-left",
}

export const createCommentErrorToast = {
  title: "Falha no processo",
  description: "Seu comentário não foi persistido, meu nobre 🤷",
  status: ToastStatusEnum.ERROR,
  duration: 9000,
  isClosable: true,
  position: ToastPosition.LEFT,
};

export const createPostErrorToast = {
  title: "Falha no processo",
  description: "Seu post não foi persistido, o código deve estar meio porco né",
  status: ToastStatusEnum.ERROR,
  duration: 9000,
  isClosable: true,
  position: ToastPosition.LEFT,
};

export const createPostRateErrorToast = {
  title: "Falha no processo",
  description: "Não consegui mandar seu like :/",
  status: ToastStatusEnum.ERROR,
  duration: 9000,
  isClosable: true,
  position: ToastPosition.LEFT,
};