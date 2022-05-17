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
  variant: "left-accent"
};

export const createPostErrorToast = {
  title: "Falha no processo",
  description: "Seu post não foi persistido, o código deve estar meio porco né",
  status: ToastStatusEnum.ERROR,
  duration: 9000,
  isClosable: true,
  position: ToastPosition.LEFT,
  variant: "left-accent"
};

export const createPostRateErrorToast = {
  title: "Falha no processo",
  description: "Não consegui mandar seu like :/",
  status: ToastStatusEnum.ERROR,
  duration: 9000,
  isClosable: true,
  position: ToastPosition.LEFT,
  variant: "left-accent"
};

export const searchPostErrorToast = {
  title: "Falha no processo",
  description: "Falhei miseravelmente ao procurar pelos posts",
  status: ToastStatusEnum.ERROR,
  duration: 9000,
  isClosable: true,
  position: ToastPosition.LEFT,
  variant: "left-accent"
};

export const deletePostErrorToast = {
  title: "Falha ao deletar",
  description: "Falhei miseravelmente ao deletar o post",
  status: ToastStatusEnum.ERROR,
  duration: 9000,
  isClosable: true,
  position: ToastPosition.LEFT,
  variant: "left-accent"
};

export const jwtCopiedToast = {
  title: "API Key copied",
  status: ToastStatusEnum.INFO,
  duration: 9000,
  isClosable: true,
  position: ToastPosition.LEFT,
  variant: "left-accent"
};