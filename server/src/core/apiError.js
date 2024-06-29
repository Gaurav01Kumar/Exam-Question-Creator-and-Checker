const { statusCode } = require('./Constants');
var logger = require('./Logger');
class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequest) {
      return statusCode.BAD_REQUEST;
    }
    if (this instanceof NotFound) {
      return statusCode.NOT_FOUND;
    }
    if (this instanceof Unauthorized) {
      return statusCode.UNAUTHERIZED;
    }
    if (this instanceof UnprocessableEntity) {
      return statusCode.UNPROCESSABLE;
    }
    if (this instanceof Locked) {
      return statusCode.LOCKED;
    }
    if (this instanceof ServiceUnavailable) {
      return statusCode.SERVICE_UNAVAILABLE;
    }
    if(this instanceof Conflict){
      return statusCode.CONFLICT;
    }
    return 500;
  }
}

function errorResponse(err, res, data = null) {
  logger.ERROR_LOG(err);
  if (data !== null) {
    const errorCode = data.error_code;
    delete data.error_code;
    res.status(errorCode).send(data);
  } else {
    logger.ERROR(err);
    if (err instanceof GeneralError) {
      res.status(err.getCode()).send({ message: err.message, data: err.data,errorDetais:JSON.stringify(err.stack) });
    } else {
      res.status(500).send({ message: err.message, data: err.data,errorDetails:JSON.stringify(err.stack) });
    }
  }
}


class BadRequest extends GeneralError {}
class NotFound extends GeneralError {}
class Unauthorized extends GeneralError {}
class UnprocessableEntity extends GeneralError {}
class Locked extends GeneralError {}
class ServiceUnavailable extends GeneralError {}
class Conflict extends GeneralError {};

module.exports = {
  GeneralError,
  BadRequest,
  NotFound,
  Unauthorized,
  UnprocessableEntity,
  Locked,
  ServiceUnavailable,
  errorResponse,
  Conflict
};
