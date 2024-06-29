let constants = {
    USER_NOT_FOUNDS: 'User does not exist',
    INAVALID_CREDENTIAL: 'Please check the email or password you have entered',
    LOGIN_SUCCESS: 'You have loggedin successfully',
    UNAUTHORIZED_ACCESS: 'Invalid access token ',
    PROJECT_ALREADY_EXIST:
      'Please choose a different name as this name is already in use for another project.',
      PROJECT_ALREADY_EXIST_IN_TRASH:
      'Please choose a different name as this name in the project trash',
    DEFAULT_SUCCESS: 'Response Success',
    PROJECT_NOT_EXIST: 'Project doesn’t exist',
    SCENARIO_NOT_EXIST: 'Scenario or Scenario version doesn’t exist',
    SCENARIO_ALREADY_EXIST: 'Scenario name already exists',
    SCENARIO_ALREADY_EXIST_INTRASH: 'Scenario name already exists in the trash',
    EXPRESSION_NOT_EXIST: 'Expression doesn’t exist',
    ENTITY_NOT_EXIST: 'Entity or Entity version doesn’t exist',
    TRIGGER_NOT_EXIST: 'Trigger does not exist',
    INITIAL_VERSION: '1.0000',
    RELEASED_EDITING: 'Editing lock has been released successfully',
    SCENARIO_XML_FILE_NOT_EXIST: 'Scenario Xml file not exist',
    DIAGRAM_LINK_NOT_FOUND: 'Diagram link is missing for canvas details',
    DIAGRAM_NODE_NOT_FOUND: 'Diagram node is missing for canvas details',
    TARGET_NODE_NOT_FOUND: 'Diagrame link target node not found',
    GUARD_CONDITION_NOT_FOUND: 'Guard is missing for canvas details',
    OUTPORT_NOT_FOUND: 'Outport is missing for canvas details',
    GUARDCONDITION_PORT_NOT_FOUND: 'Guard condition port is missing for canvas details',
    INVALID_SCENARIO_DETAILS: 'Invalid Scenario details or Guard condition or canvas details',
    ALREADY_EDITING: 'Scenario is currently being edited by ',
    XML_FILE_NOT_FOUND: 'Scenario xml and file name is missing',
    SEARCH_BY_NAME_DESC: 'name_description',
    SEARCH_BY_TAGS: 'tag',
    SEARCH_BY_TRIGGERS: 'trigger',
    SEARCH_BY_DEVICES: 'device',
    SEARCH_BY_ENTITY: 'entity',
    ENTITY_NAME_EXIST: 'Either entity with same name exist or form data is not valid',
    CATEGORY_NAME_EXIST: 'This category already exists.',
    CATEGORY_NOT_EXIST: 'Category doesn’t exist',
    CATEGORY_DEVICE_NOT_EXIST: 'Device or Category doesn’t exist',
    EXPRESSION_ALREADY_EXIST: 'The expression name already exists',
    DEVICE_NAME_EXIST: 'This Device ID already exists',
    ENTITY_DEVICE_NOT_EXIST: 'Entity or Device doesn’t exist',
    CATEGORY_ICON_DIMENSION: 'The uploaded icon must have the dimensions 24 x 24',
    SUB_CATEGORY_NAME_EXIST: 'This subcategory already exists within the category',
    PARENT_CATEGORY_NOT_EXIST: 'Parent Category doesn’t exist',
    PARENT_SUB_CATEGORY_NOT_EXIST: 'Parent or Sub Category doesn’t exist',
    DEFAULT_CATEGORY: 'Default',
    TRIGGER_EMPTY_FILE: 'The file contains blanks records. Please verify and upload again.',
    TRIGGER_COLUMN_EMPTY_FILE: 'Bad records found in the file. Please verify and try again.',
    DUPLICATE_TRIGGER_NAME: 'The file contains duplicate records. Please verify and try again',
    TRIGGER_NAME_EXIST: 'Trigger is associated to different ID. Please verify and try again.',
    TRIGGER_NAME_WITH_DIFF_ID: 'Trigger is associated to different ID. Please verify and try again.',
    SCENARIO_PUBLISHED_STATUS: 'changes will not be saved since it’s a published scenario',
    SCENARIO_OBSOLETE_STATUS: 'Scenario can’t be edited as it’s an obsolete scenario',
    INVALID_CONSTRAINTS: 'Invalid constraints, Decision block is missing in the constraint',
    EXPRESSION_USE_IN_SCENARIO: 'expressions can’t be deleted as it is associated in a scenario',
    EXPRESSION_OPEN_BY_OTHER_USER:
      'Expression is opened in expression designer, Please close it and try again',
    MACRO_NOT_EXIST: 'Macro doesn’t exist',
    PROJECT_CREATE: 'Project has been created successfully',
    DUPLICATE_ENTITY_NAME: 'The file contains duplicate records. Please verify and try again',
    ENTITY_EMPTY_FILE: 'The file contains blanks records. Please verify and upload again.',
    ENTITY_ALREADY_PRESENT: 'Following entities already exists in the scenario composer',
    CATEGORY_ICON: 'The category cannot be created. Please upload an icon',
    EXPRESSION_IS_STATIC: 'Given expression is static can not be updated/ cloned or deleted.',
    CATEGORY_IS_STATIC: 'Given category is static can not be updated/ cloned or deleted.',
    ENTITY_IS_STATIC: 'Given entity is static can not be updated/cloned or deleted.',
    DEVICE_IS_STATIC: 'Device with static entity can not be updated/ cloned or deleted.',
    ENTITY_VERSION_MISMATCH:
      'Entity or entity version does not match with device’s entity or version, couldn’t update/delete details',
    TRIGGER_UPLOAD_SUCCESS: 'Triggers uploaded successfully',
    ENTITY_OPEN_BY_OTHER_USER: 'Entity is opened in entity designer, Please close it and try again',
    ENTITY_USE_IN_SCENARIO: 'entity can’t be deleted as it is associated with scenarios in them',
    DEVICE_USE_IN_SCENARIO: 'entity can’t be deleted as it is associated with device id’s in them',
    DIAGRAM_NODE_MODEL_EMPTY: 'It seems scenario is empty',
    INAVALID_PASSWORD: 'Invalid credentials, Please enter correct password to proceed',
    EMPTY_TRASH_SUCCESS: 'All items are permanently deleted',
    DUPLICATE_DEVICE_NAME:
      "Below Device ID's are duplicate in uploaded file. Please verify and try again",
    MOVE_SINGLE_SCENARIO_EDIT:
      'The scenario cannot be moved as it is currently being edited. Please try again.',
    PROJECT_NOT_FOUND_INTRASH: 'Project not found in the trash',
    MOVE_BULK_SCENARIO_EDIT:
      'The move action cannot performed as below scenarios are being edited. Please try again.',
    DRAFT_STATUS: 'Draft',
    ACTIVE_STATUS: 'ACTIVE',
    SYSTEM_LOG_FILE_NOT_FOUND: 'System log file is missing',
    EXPRESSION_FILE_NOT_FOUND: 'Expression file is missing',
    DEFAULT_COLOR: '#e4e2e2',
    DEFAULT_BORDER_COLOR: '#c3c0c0',
    EMPTY_PROPERTY: 'Entity does not have any properties. Please add one or properties to the entity',
    CATEGORY_NOT_EXIST_DEVICE:
      'The device cannot be created as the category/subcategory does not exists.',
    DEVICE_ALREADY_LINKED: 'Device/Category already assigned',
    TRIGGER_USED_MORE_THAN_ONE: 'TRIGGER_USED_MORE_THAN_ONE',
    MISSING_MANDATORY_PROPERTY_VALUE: 'MISSING_MANDATORY_PROPERTY_VALUE',
    CANVAS_DOESNOT_CONTAINS_STARTIF: 'CANVAS_DOESNOT_CONTAINS_STARTIF',
    MORETHAN_ONE_STARTIF: 'MORETHAN_ONE_STARTIF',
    MORETHAN_JUMPIN_BLOCK: 'MORETHAN_JUMPIN_BLOCK',
    CANVAS_DOESNOT_CONTAINS_ENDBLOCK: 'CANVAS_DOESNOT_CONTAINS_ENDBLOCK',
    CONSTRAINT_CONTAINS_STARTIF_BLOCK: 'CONSTRAINT_CONTAINS_STARTIF_BLOCK',
    JUMPOUT_DOESNOT_HAVE_CORRESPONDING_JUMPIN: 'JUMPOUT_DOESNOT_HAVE_CORRESPONDING_JUMPIN',
    JUMPIN_DOESNOT_HAVE_CORRESPONDING_JUMPOUT: 'JUMPIN_DOESNOT_HAVE_CORRESPONDING_JUMPOUT',
    MISSING_CONSTRAINT_BLOCK: 'MISSING_CONSTRAINT_BLOCK',
    CONSTRAINT_CANVAS_DOESNOT_HAVE_ENDBLOCK: 'CONSTRAINT_CANVAS_DOESNOT_HAVE_ENDBLOCK',
    INCOMPATIBLE_VALUE_ASSIGN_WRITE_SIGNAL: 'INCOMPATIBLE_VALUE_ASSIGN_WRITE_SIGNAL',
    SCENARIO_CANVAS_CONTAINS_CONSTRAINT_BLOCK: 'SCENARIO_CANVAS_CONTAINS_CONSTRAINT_BLOCK',
    MORETHAN_DISCONNECTED_NODES: 'MORETHAN_DISCONNECTED_NODES',
    PATH_SHOULD_LEAD_TO_ENDBLOCK: 'PATH_SHOULD_LEAD_TO_ENDBLOCK',
    JUMPOUT_DOESNOT_HAVE_CORRESPONDING_JUMPIN_CONSTRAINT:
      'JUMPOUT_DOESNOT_HAVE_CORRESPONDING_JUMPIN_CONSTRAINT',
    JUMPIN_DOESNOT_HAVE_CORRESPONDING_JUMPOUT_CONSTRAINT:
      'JUMPIN_DOESNOT_HAVE_CORRESPONDING_JUMPOUT_CONSTRAINT',
    MORETHAN_CONTRAINT_FOUND: 'MORETHAN_CONTRAINT_FOUND',
    MORETHAN_JUMPIN_BLOCK_CONSTRAINT: 'MORETHAN_JUMPIN_BLOCK_CONSTRAINT',
    SCENARIO_HAS_IMPACTED_DEVICE:
      'Scenario consisiting impacted devices due to entity properties change',
    CONCURRENT_DELETE:
      "You can't delete a scenario which is opened in a edit mode. Please save the scenario and try again",
    DUPLICATE_PROPERTY_FOUND: 'Duplicate property found in the entity. Please check and try again',
    VERSION_HISTORY_NOT_FOUND: 'Scenario does not found',
    DEVICE_NOT_EXIST: 'Device does not exist',
    MACRO_ALREADY_EXIST: 'The macro name already exists',
    ACCESS_RESTRICTED: 'Access denied',
    TAG_NAME_EXIST: 'This tag already exists.',
    LOG_FILE_LIMIT: 10000,
    CONFLICT : 'user already exists',
  };
  let statusCode = {
    HTTP_SUCCESS: 200,
    UNAUTHERIZED: 401,
    INTERNAL_SERVER: 500,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    CREATED: 201,
    FORBIDDEN: 403,
    UNPROCESSABLE: 422,
    LOCKED: 423,
    SERVICE_UNAVAILABLE: 503,
    CONFLICT:409
  };
  let role = {
    READ_ONLY: 'READ ONLY',
  };
  
  module.exports = { constants, statusCode, role };
  