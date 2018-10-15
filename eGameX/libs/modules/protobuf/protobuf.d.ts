// /// <reference path="bytebuffer.d.ts" />
declare module dcodeIO {

    class Buffer {

    }
    module ProtoBuf {
        /**
         * ProtoBuf utilities.
         * @exports ProtoBuf.Util
         * @namespace
         */
        module Util {
            /**
             * Flag if running in node or not.
             * @type {boolean}
             * @const
             * @expose
             */
            var IS_NODE: boolean;
            /**
             * Fetches a resource.
             * @param {string} path Resource path
             * @param {function(?string)=} callback Callback receiving the resource's contents. If omitted the resource will
             *   be fetched synchronously. If the request failed, contents will be null.
             * @return {?string|undefined} Resource contents if callback is omitted (null if the request failed), else undefined.
             * @expose
             */
            function fetch(path: string, callback?: Function): string | void;
            /**
             * Converts a string to camel case.
             * @param {string} str
             * @returns {string}
             * @expose
             */
            function toCamelCase(str: string): string;
            /**
             * Constructs a XMLHttpRequest object.
             * @return {XMLHttpRequest}
             * @throws {Error} If XMLHttpRequest is not supported
             * @expose
             */
            function XHR(): XMLHttpRequest;
        }
        /**
         * Utilities to parse .proto files.
         * @exports ProtoBuf.DotProto
         * @namespace
         */
        module DotProto {
            /**
             * Constructs a new Parser.
             * @exports ProtoBuf.DotProto.Parser
             * @class prototype parser
             * @param {string} source Source
             * @constructor
             */
            class Parser {
                constructor(source: string);
                /**
                 * Whether parsing proto3 or not.
                 * @type {boolean}
                 */
                proto3: boolean;
                /**
                 * Tokenizer.
                 * @type {!ProtoBuf.DotProto.Tokenizer}
                 * @expose
                 */
                tn: Tokenizer;
                /**
                 * Parses the specified source.
                 * @returns {!Object}
                 * @throws {Error} If the source cannot be parsed
                 * @expose
                 */
                static parse(): any;
                /**
                 * Parses the source.
                 * @returns {!Object}
                 * @throws {Error} If the source cannot be parsed
                 * @expose
                 */
                parse(): any;
                /**
                 * Returns a string representation of this parser.
                 * @returns {string}
                 */
                toString(): string;
            }
            /**
             * Constructs a new Tokenizer.
             * @exports ProtoBuf.DotProto.Tokenizer
             * @class prototype tokenizer
             * @param {string} proto Proto to tokenize
             * @constructor
             */
            class Tokenizer {
                constructor(parameters);
                /**
                 * Current index.
                 * @type {number}
                 * @expose
                 */
                index: number;
                /**
                 * Current line.
                 * @type {number}
                 * @expose
                 */
                line: number;
                /**
                 * Source to parse.
                 * @type {string}
                 * @expose
                 */
                source: string;
                /**
                 * Token stack.
                 * @type {!Array.<string>}
                 * @expose
                 */
                stack: Array<string>;
                /**
                 * Gets the next token and advances by one.
                 * @return {?string} Token or `null` on EOF
                 * @expose
                 */
                next(): string;
                /**
                 * Omits an optional token.
                 * @param {string} expected Expected optional token
                 * @returns {boolean} `true` if the token exists
                 */
                omit(expected: string): boolean;
                /**
                 * Peeks for the next token.
                 * @return {?string} Token or `null` on EOF
                 * @expose
                 */
                peek(): string;
                /**
                 * Skips a specific token and throws if it differs.
                 * @param {string} expected Expected token
                 * @throws {Error} If the actual token differs
                 */
                skip(expected: string): void;
                /**
                 * Returns a string representation of this object.
                 * @return {string} String representation as of "Tokenizer(index/length)"
                 * @expose
                 */
                toString(): string;
            }
        }
        /**
         * Reflection types.
         * @exports ProtoBuf.Reflect
         * @namespace
         */
        module Reflect {
            class Element {
                /**
                 * Constructs a new Element implementation that checks and converts values for a
                 * particular field type, as appropriate.
                 *
                 * An Element represents a single value: either the value of a singular field,
                 * or a value contained in one entry of a repeated field or map field. This
                 * class does not implement these higher-level concepts; it only encapsulates
                 * the low-level typechecking and conversion.
                 *
                 * @exports ProtoBuf.Reflect.Element
                 * @param {{name: string, wireType: number}} type Resolved data type
                 * @param {ProtoBuf.Reflect.T|null} resolvedType Resolved type, if relevant
                 * (e.g. submessage field).
                 * @param {boolean} isMapKey Is this element a Map key? The value will be
                 * converted to string form if so.
                 * @param {string} syntax Syntax level of defining message type, e.g.,
                 * proto2 or proto3.
                 * @param {string} name Name of the field containing this element (for error
                 * messages)
                 * @constructor
                 */
                constructor(type: any, resolvedType: T | void, isMapKey: boolean, syntax: string, name: string);
                /**
                 * Element is a map key.
                 * @type {boolean}
                 */
                isMapKey: boolean;
                /**
                 * Name of the field containing this element (for error messages)
                 * @type {string}
                 */
                name: string;
                /**
                 * Element type reference to submessage or enum definition, if needed.
                 * @type {ProtoBuf.Reflect.T|null}
                 */
                resolvedType: T | void;
                /**
                 * Syntax level of defining message type, e.g., proto2 or proto3.
                 * @type {string}
                 */
                syntax: string;
                /**
                 * Element type, as a string (e.g., int32).
                 * @type {{name: string, wireType: number}}
                 */
                type: any;
                /**
                 * Returns the default value for this field in proto3.
                 * @function
                 * @param type {string|{name: string, wireType: number}} the field type
                 * @returns {*} Default value
                 */
                static defaultFieldValue(type: string | any): any;
            }
            /**
             * An extension (field).
             * @exports ProtoBuf.Reflect.Extension
             * @constructor
             * @param {!ProtoBuf.Builder} builder Builder reference
             * @param {!ProtoBuf.Reflect.T} parent Parent object
             * @param {string} name Object name
             * @param {!ProtoBuf.Reflect.Message.Field} field Extension field
             */
            class Extension {
                constructor(builder: Builder, parent: T, name: string, field: Field);
                /**
                 * Extended message field.
                 * @type {!ProtoBuf.Reflect.Message.Field}
                 * @expose
                 */
                field: Field;
            }
            /**
             * Constructs a Reflect base class.
             * @exports ProtoBuf.Reflect.T
             * @constructor
             * @abstract
             * @param {!ProtoBuf.Builder} builder Builder reference
             * @param {?ProtoBuf.Reflect.T} parent Parent object
             * @param {string} name Object name
             */
            class T {
                constructor(builder: Builder, parent: T, name: string);

                /**
                 * Builder reference.
                 * @type {!ProtoBuf.Builder}
                 * @expose
                 */
                builder: Builder;
                /**
                 * Fully qualified class name
                 * @type {string}
                 * @expose
                 */
                className: string;
                /**
                 * Object name in namespace.
                 * @type {string}
                 * @expose
                 */
                name: string;
                /**
                 * Parent object.
                 * @type {?ProtoBuf.Reflect.T}
                 * @expose
                 */
                parent: T;
                /**
                 * Builds this type.
                 * @throws {Error} If this type cannot be built directly
                 * @expose
                 */
                build();
                /**
                 * Returns the fully qualified name of this object.
                 * @returns {string} Fully qualified name as of ".PATH.TO.THIS"
                 * @expose
                 */
                fqn(): string;
                /**
                 * Returns a string representation of this Reflect object (its fully qualified name).
                 * @param {boolean=} includeClass Set to true to include the class name. Defaults to false.
                 * @return String representation
                 * @expose
                 */
                toString(includeClass?: boolean): string;
            }

            class Namespace extends T {
                /**
                 * Constructs a new Namespace.
                 * @exports ProtoBuf.Reflect.Namespace
                 * @param {!ProtoBuf.Builder} builder Builder reference
                 * @param {?ProtoBuf.Reflect.Namespace} parent Namespace parent
                 * @param {string} name Namespace name
                 * @param {Object.<string,*>=} options Namespace options
                 * @param {string?} syntax The syntax level of this definition (e.g., proto3)
                 * @constructor
                 * @extends ProtoBuf.Reflect.T
                 */
                constructor(builder: Builder, parent: Namespace, name: string, options?: { [key: string]: any }, syntax?: string);
                /**
                 * Children inside the namespace.
                 * @type {!Array.<ProtoBuf.Reflect.T>}
                 */
                children: Array<T>;
                /**
                 * Options.
                 * @type {!Object.<string, *>}
                 */
                options: { [key: string]: any };
                /**
                 * Syntax level (e.g., proto2 or proto3).
                 * @type {!string}
                 */
                syntax: string;
                /**
                 * Adds a child to the namespace.
                 * @param {ProtoBuf.Reflect.T} child Child
                 * @throws {Error} If the child cannot be added (duplicate)
                 * @expose
                 */
                addChild(child: T);
                /**
                 * Builds the namespace and returns the runtime counterpart.
                 * @return {Object.<string,Function|Object>} Runtime namespace
                 * @expose
                 */
                build(rebuild?: boolean): { [key: string]: any | Function };
                /**
                 * Builds the namespace's '$options' property.
                 * @return {Object.<string,*>}
                 */
                buildOpt(): { [key: string]: any };
                /**
                 * Gets a child by its name or id.
                 * @param {string|number} nameOrId Child name or id
                 * @return {?ProtoBuf.Reflect.T} The child or null if not found
                 * @expose
                 */
                getChild(nameOrId: string | number): T;
                /**
                 * Returns an array of the namespace's children.
                 * @param {ProtoBuf.Reflect.T=} type Filter type (returns instances of this type only). Defaults to null (all children).
                 * @return {Array.<ProtoBuf.Reflect.T>}
                 * @expose
                 */
                getChildren(type?: T): Array<T>;
                /**
                 * Gets the value assigned to the option with the specified name.
                 * @param {string=} name Returns the option value if specified, otherwise all options are returned.
                 * @return {*|Object.<string,*>}null} Option value or NULL if there is no such option
                 */
                getOption(name?: string): any | { [key: string]: any };
                /**
                 * Determines the shortest qualified name of the specified type, if any, relative to this namespace.
                 * @param {!ProtoBuf.Reflect.T} t Reflection type
                 * @returns {string} The shortest qualified name or, if there is none, the fqn
                 * @expose
                 */
                qn(t: T): string;
                /**
                 * Resolves a reflect object inside of this namespace.
                 * @param {string|!Array.<string>} qn Qualified name to resolve
                 * @param {boolean=} excludeNonNamespace Excludes non-namespace types, defaults to `false`
                 * @return {?ProtoBuf.Reflect.Namespace} The resolved type or null if not found
                 * @expose
                 */
                resolve(qn: string | Array<string>, excludeNonNamespace?: boolean): Namespace;
            }

            class Service extends Namespace {
                /**
                 * Constructs a new Service.
                 * @exports ProtoBuf.Reflect.Service
                 * @param {!ProtoBuf.Builder} builder Builder reference
                 * @param {!ProtoBuf.Reflect.Namespace} root Root
                 * @param {string} name Service name
                 * @param {Object.<string,*>=} options Options
                 * @constructor
                 * @extends ProtoBuf.Reflect.Namespace
                 */
                constructor(builder: Builder, root: Namespace, name: string, options?: { [key: string]: any });
                /**
                 * Built runtime service class.
                 * @type {?function(new:ProtoBuf.Builder.Service)}
                 */
                clazz: Function;

            }
            class Method extends T {
                /**
                 * Constructs a new Service.
                 * @exports ProtoBuf.Reflect.Service
                 * @param {!ProtoBuf.Builder} builder Builder reference
                 * @param {!ProtoBuf.Reflect.Namespace} root Root
                 * @param {string} name Service name
                 * @param {Object.<string,*>=} options Options
                 * @constructor
                 * @extends ProtoBuf.Reflect.Namespace
                 */
                constructor(builder: Builder, svc: Service, name: string, options?: { [key: string]: any });
                /**
                 * Options.
                 * @type {!Object.<string, *>}
                 */
                options: { [key: string]: any };
            }
            class RPCMethod extends Method {
                /**
                 * RPC service method.
                 * @exports ProtoBuf.Reflect.Service.RPCMethod
                 * @param {!ProtoBuf.Builder} builder Builder reference
                 * @param {!ProtoBuf.Reflect.Service} svc Service
                 * @param {string} name Method name
                 * @param {string} request Request message name
                 * @param {string} response Response message name
                 * @param {boolean} request_stream Whether requests are streamed
                 * @param {boolean} response_stream Whether responses are streamed
                 * @param {Object.<string,*>=} options Options
                 * @constructor
                 * @extends ProtoBuf.Reflect.Service.Method
                 */
                constructor(builder: Builder, svc: Service, name: string, request: string, response: string, request_stream: boolean, response_stream: boolean, options?: { [key: string]: any });
                /**
                 * Request message name.
                 * @type {string}
                 * @expose
                 */
                requestName: string;
                /**
                 * Whether requests are streamed
                 * @type {bool}
                 * @expose
                 */
                requestStream: boolean;
                /**
                 * Resolved request message type.
                 * @type {ProtoBuf.Reflect.Message}
                 * @expose
                 */
                resolvedRequestType: Message;
                /**
                 * Resolved response message type.
                 * @type {ProtoBuf.Reflect.Message}
                 * @expose
                 */
                resolvedResponseType: Message;
                /**
                 * Response message name.
                 * @type {string}
                 * @expose
                 */
                responseName: string;
                /**
                 * Whether responses are streamed
                 * @type {bool}
                 * @expose
                 */
                responseStream: boolean;
            }

            class Enum extends Namespace {
                /**
                 * Constructs a new Enum.
                 * @exports ProtoBuf.Reflect.Enum
                 * @param {!ProtoBuf.Builder} builder Builder reference
                 * @param {!ProtoBuf.Reflect.T} parent Parent Reflect object
                 * @param {string} name Enum name
                 * @param {Object.<string,*>=} options Enum options
                 * @param {string?} syntax The syntax level (e.g., proto3)
                 * @constructor
                 * @extends ProtoBuf.Reflect.Namespace
                 */
                constructor(builder: Builder, parent: T, name: string, options?: { [key: string]: any }, syntax?: string);
                /**
                 * Gets the string name of an enum value.
                 * @param {!ProtoBuf.Builder.Enum} enm Runtime enum
                 * @param {number} value Enum value
                 * @returns {?string} Name or `null` if not present
                 * @expose
                 */
                static getName(enmnon: Enum, value: number): string;
                /**
                 * Runtime enum object.
                 * @type {Object.<string,number>|null}
                 * @expose
                 */
                object: { [key: string]: number } | void;
            }

            class Value extends T {
                /**
                 * Constructs a new Enum Value.
                 * @exports ProtoBuf.Reflect.Enum.Value
                 * @param {!ProtoBuf.Builder} builder Builder reference
                 * @param {!ProtoBuf.Reflect.Enum} enm Enum reference
                 * @param {string} name Field name
                 * @param {number} id Unique field id
                 * @constructor
                 * @extends ProtoBuf.Reflect.T
                 */
                constructor(builder: Builder, enm: Enum, name: string, id: number);
                /**
                 * Unique enum value id.
                 * @type {number}
                 * @expose
                 */
                id: number;
            }
            class Message extends Namespace {
                /**
                 * Constructs a new Message.
                 * @exports ProtoBuf.Reflect.Message
                 * @param {!ProtoBuf.Builder} builder Builder reference
                 * @param {!ProtoBuf.Reflect.Namespace} parent Parent message or namespace
                 * @param {string} name Message name
                 * @param {Object.<string,*>=} options Message options
                 * @param {boolean=} isGroup `true` if this is a legacy group
                 * @param {string?} syntax The syntax level of this definition (e.g., proto3)
                 * @constructor
                 * @extends ProtoBuf.Reflect.Namespace
                 */
                constructor(builder: Builder, parent: T, name: string, options?: { [key: string]: any }, isGroup?: boolean, syntax?: string);
                /**
                 * Runtime message class.
                 * @type {?function(new:ProtoBuf.Builder.Message)}
                 * @expose
                 */
                clazz: Function;
                /**
                 * Extensions range.
                 * @type {!Array.<number>|undefined}
                 * @expose
                 */
                extensions: Array<number> | void;
                /**
                 * Whether this is a legacy group or not.
                 * @type {boolean}
                 * @expose
                 */
                isGroup: boolean;
                /**
                 * Calculates a runtime message's byte length.
                 * @param {!ProtoBuf.Builder.Message} message Runtime message to encode
                 * @returns {number} Byte length
                 * @throws {Error} If required fields are missing or the message cannot be calculated for another reason
                 * @expose
                 */
                calculate(messagenon: Message): number;
                /**
                 * Decodes an encoded message and returns the decoded message.
                 * @param {ByteBuffer} buffer ByteBuffer to decode from
                 * @param {number=} length Message length. Defaults to decode all remaining data.
                 * @param {number=} expectedGroupEndId Expected GROUPEND id if this is a legacy group
                 * @return {ProtoBuf.Builder.Message} Decoded message
                 * @throws {Error} If the message cannot be decoded
                 * @expose
                 */
                decode(buffer: ByteBuffer, length?: number, expectedGroupEndId?: number): Message;
                /**
                 * Encodes a runtime message's contents to the specified buffer.
                 * @param {!ProtoBuf.Builder.Message} message Runtime message to encode
                 * @param {ByteBuffer} buffer ByteBuffer to write to
                 * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
                 * @return {ByteBuffer} The ByteBuffer for chaining
                 * @throws {Error} If required fields are missing or the message cannot be encoded for another reason
                 * @expose
                 */
                encode(messagenon: Message, buffer: ByteBuffer, noVerify?: boolean): ByteBuffer;
            }
            class OneOf extends T {
                /**
                 * Constructs a new Message OneOf.
                 * @exports ProtoBuf.Reflect.Message.OneOf
                 * @param {!ProtoBuf.Builder} builder Builder reference
                 * @param {!ProtoBuf.Reflect.Message} message Message reference
                 * @param {string} name OneOf name
                 * @constructor
                 * @extends ProtoBuf.Reflect.T
                 */
                constructor(builder: Builder, message: Message, name: string);
                /**
                 * Enclosed fields.
                 * @type {!Array.<!ProtoBuf.Reflect.Message.Field>}
                 * @expose
                 */
                fields: Field;
            }
            class Field extends T {
                constructor(builder: Builder, message: Message, rule: string, keytype: string, type: string, name: string, id: string, options?: { [key: string]: any }, oneof?: OneOf, syntax?: string);
                /**
                 * Syntax level of this definition (e.g., proto3).
                 */
                syntax: string;
                /**
                 * Message field options.
                 */
                options: { [key: string]: any };
                /**
                 * Default value.
                 * @type {*}
                 * @expose
                 */
                defaultValue: any;
                /**
                 * Element implementation. Created in build() after types are resolved.
                 */
                element: Reflect.Element;
                /**
                 * Unique message field id.
                 */
                id: number;
                /**
                 * Key element implementation, for map fields. Created in build() after types are resolved.
                 */
                keyElement: Reflect.Element;
                /**
                 * Message field key type. Type reference string if unresolved, protobuf type if resolved. Valid only if this.map === true, null otherwise.
                 */
                keyType: string | Object | void;
                /**
                 * Message field map flag.
                 */
                map: boolean;
                /**
                 * Enclosing OneOf.
                 */
                oneof: OneOf;
                /**
                 * Original field name.
                 */
                originalName: string;
                /**
                 * Message field repeated flag.
                 */
                repeated: boolean;
                /**
                 * Message field required flag.
                 */
                required: boolean;
                /**
                 * Resolved type reference inside the global namespace.
                 */
                resolvedType: T | void;
                /**
                 * Message field type. Type reference string if unresolved, protobuf type if resolved. In a map field, this is the value type.
                 */
                type: string | Object;
                /**
                 * Calculates the length of this field's value on the network level.
                 * @param {*} value Field value
                 * @param {!ProtoBuf.Builder.Message} message Runtime message
                 * @returns {number} Byte length
                 * @expose
                 */
                calculate(value: any, message: Message): number;
                /**
                 * Decode the field value from the specified buffer.
                 * @param {number} wireType Leading wire type
                 * @param {ByteBuffer} buffer ByteBuffer to decode from
                 * @param {boolean=} skipRepeated Whether to skip the repeated check or not. Defaults to false.
                 * @return {*} Decoded value: array for packed repeated fields, [key, value] for
                 *             map fields, or an individual value otherwise.
                 * @throws {Error} If the field cannot be decoded
                 * @expose
                 */
                decode(wireType: number, buffer: ByteBuffer, skipRepeated?: boolean): any;
                /**
                 * Encodes the specified field value to the specified buffer.
                 * @param {*} value Verified field value
                 * @param {ByteBuffer} buffer ByteBuffer to encode to
                 * @param {!ProtoBuf.Builder.Message} message Runtime message
                 * @return {ByteBuffer} The ByteBuffer for chaining
                 * @throws {Error} If the field cannot be encoded
                 * @expose
                 */
                encode(value: any, buffer: ByteBuffer, message: Message): ByteBuffer;
                /**
                 * Determines whether the field will have a presence on the wire given its
                 * value.
                 * @param {*} value Verified field value
                 * @param {!ProtoBuf.Builder.Message} message Runtime message
                 * @return {boolean} Whether the field will be present on the wire
                 */
                hasWirePresence(value: any, message: Message): boolean;
                /**
                 * Checks if the given value can be set for this field.
                 * @param {*} value Value to check
                 * @param {boolean=} skipRepeated Whether to skip the repeated value check or not. Defaults to false.
                 * @return {*} Verified, maybe adjusted, value
                 * @throws {Error} If the value cannot be set for this field
                 * @expose
                 */
                verifyValue(value: any, skipRepeated?: boolean): any;
            }
            class ExtensionField extends Field {
                /**
                 * Constructs a new Message ExtensionField.
                 * @exports ProtoBuf.Reflect.Message.ExtensionField
                 * @param {!ProtoBuf.Builder} builder Builder reference
                 * @param {!ProtoBuf.Reflect.Message} message Message reference
                 * @param {string} rule Rule, one of requried, optional, repeated
                 * @param {string} type Data type, e.g. int32
                 * @param {string} name Field name
                 * @param {number} id Unique field id
                 * @param {!Object.<string,*>=} options Options
                 * @constructor
                 * @extends ProtoBuf.Reflect.Message.Field
                 */
                constructor(builder: Builder, message: Message, rule: string, type: string, name: string, id: number, options?: { [key: string]: any });
                /**
                 * Extension reference.
                 */
                extension: Extension;
            }
        }



        var ByteBuffer: Function;
        /**
         * @language en_US
         * If set to true, field names will be converted from underscore notation to camel case. Defaults to false. Must be set prior to parsing.
         */
        var convertFieldsToCamelCase: boolean;
        /**
         * @language en_US
         * Maximum field id.
         */
        var ID_MAX: number;
        /**
         * @language en_US
         * Minimum field id.
         */
        var ID_MIN: number;
        /**
         * @language en_US
         * Language expressions.
         */
        var Lang: { [key: string]: RegExp };

        var Long: Function;
        /**
         * @language en_US
         * Valid map key types.
         */
        var MAP_KEY_TYPES: Array<{ name: string, wireType: number, defaultValue: any }>;
        /**
         * @language en_US
         * Packable wire types.
         */
        var PACKABLE_WIRE_TYPES: Array<number>;
        /**
         * @language en_US
         * By default, messages are populated with (setX, set_x) accessors for each field. This can be disabled by setting this to false prior to building messages.
         */
        var populateAccessors: boolean;
        /**
         * @language en_US
         * By default, messages are populated with default values if a field is not present on the wire. To disable this behavior, set this setting to false.
         */
        var populateDefaults: boolean;
        /**
         * @language en_US
         * Types.
         */
        var TYPES: { [key: string]: { name: string, wireType: number, defaultValue: any } };
        /**
         * @language en_US
         * ProtoBuf.js version.
         */
        var VERSION: string;
        /**
         * @language en_US
         * Wire types. 
         * BITS32:Fixed 32 bits wire type.
         * BITS64:Fixed 64 bits wire type.
         * ENDGROUP:End group wire type.
         * LDELIM:Length delimited wire type.
         * STARTGROUP:Start group wire type.
         * VARINT:Varint wire type.
         */
        var WIRE_TYPES: { BITS32: number, BITS64: number, ENDGROUP: number, LDELIM: number, STARTGROUP: number, VARINT: number };
        /**
         * @language en_US
         * Loads a .json definition and returns the Builder.
         * @param {!*|string} json JSON definition
         * @param {(ProtoBuf.Builder|string|{root: string, file: string})=} builder Builder to append to. Will create a new one if omitted.
         * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
         * @return {ProtoBuf.Builder} Builder to create new messages
         * @throws {Error} If the definition cannot be parsed or built
         * @expose
         */
        function loadJson(json: any | string, builder?: Builder | string | any,
            filename?: string | any): Builder;
        /**
         * @language en_US
         * Loads a .json file and returns the Builder.
         * @param {string|!{root: string, file: string}} filename Path to json file or an object specifying 'file' with
         *  an overridden 'root' path for all imported files.
         * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
         *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
         *  file will be read synchronously and this function will return the Builder.
         * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
         * @return {?ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
         *   request has failed), else undefined
         * @expose
         */
        function loadJsonFile(filename: string | any, callback?: Function, builder?: Builder): Builder | void;
        /**
         * @language en_US
         * Loads a .proto string and returns the Builder.
         * 加载一个.proto字符串并返回Builder类型实例.
         * @param {string} proto .proto file contents
         * @param {(ProtoBuf.Builder|string|{root: string, file: string})=} builder Builder to append to. Will create a new one if omitted.
         * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
         * @return {ProtoBuf.Builder} Builder to create new messages
         * @throws {Error} If the definition cannot be parsed or built
         * @expose
         */
        function loadProto(proto: string, builder?: Builder | string | any, filename?: string | any): Builder;
        /**
         * @language en_US
         * Loads a .proto file and returns the Builder.
         * 
         * @param {string|{root: string, file: string}} filename Path to proto file or an object specifying 'file' with
         *  an overridden 'root' path for all imported files.
         * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
         *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
         *  file will be read synchronously and this function will return the Builder.
         * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
         * @return {?ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
         *   request has failed), else undefined
         * @expose
         */
        function loadProtoFile(filename: string | any, callback?: Function, builder?: Builder): Builder | void;
        /**
         * Constructs a new empty Builder.
         * @param {Object.<string,*>=} options Builder options, defaults to global options set on ProtoBuf
         * @return {!ProtoBuf.Builder} Builder
         * @expose
         */
        function newBuilder(options?: { [key: string]: any }): Builder;
        /**
         * Loads a .proto file and returns the Builder. This is an alias of {@link ProtoBuf.loadProtoFile}.
         * @function
         * @param {string|{root: string, file: string}} filename Path to proto file or an object specifying 'file' with
         *  an overridden 'root' path for all imported files.
         * @param {function(?Error, !ProtoBuf.Builder=)=} callback Callback that will receive `null` as the first and
         *  the Builder as its second argument on success, otherwise the error as its first argument. If omitted, the
         *  file will be read synchronously and this function will return the Builder.
         * @param {ProtoBuf.Builder=} builder Builder to append to. Will create a new one if omitted.
         * @return {!ProtoBuf.Builder|undefined} The Builder if synchronous (no callback specified, will be NULL if the
         *   request has failed), else undefined
         * @expose
         */
        function protoFromFile(filename: string | any, callback?: Function, builder?: Builder): Builder | void;
        /**
         * Loads a .proto string and returns the Builder. This is an alias of {@link ProtoBuf.loadProto}.
         * @function
         * @param {string} proto .proto file contents
         * @param {(ProtoBuf.Builder|string)=} builder Builder to append to. Will create a new one if omitted.
         * @param {(string|{root: string, file: string})=} filename The corresponding file name if known. Must be specified for imports.
         * @return {ProtoBuf.Builder} Builder to create new messages
         * @throws {Error} If the definition cannot be parsed or built
         * @expose
         */
        function protoFromString(proto: string, builder?: Builder | string, filename?: string | any): Builder;
        class Map {
            constructor(field: Reflect.Field, contents?: { [key: string]: any });
            /**
             * The field corresponding to this map.
             */
            field: Reflect.Field;
            /**
             * Element instance corresponding to key type.
             */
            keyElem: Reflect.Element;
            /**
             * Internal map: stores mapping of (string form of key) -> (key, value)
             * pair.
             *
             * We provide map semantics for arbitrary key types, but we build on top
             * of an Object, which has only string keys. In order to avoid the need
             * to convert a string key back to its native type in many situations,
             * we store the native key value alongside the value. Thus, we only need
             * a one-way mapping from a key type to its string form that guarantees
             * uniqueness and equality (i.e., str(K1) === str(K2) if and only if K1
             * === K2).
             *
             * @type {!Object<string, {key: *, value: *}>}
             */
            map: { [key: string]: any };
            /**
             * Element instance corresponding to value type.
             */
            valueElem: Reflect.Element;
        }
        class Builder {
            /**
             * Constructs a new Builder.
             * @exports ProtoBuf.Builder
             * @class Provides the functionality to build protocol messages.
             * @param {Object.<string,*>=} options Options
             * @constructor
             */
            constructor(options?: { [key: string]: any });
            /**
             * Imported files.
             * @type {Array.<string>}
             * @expose
             */
            files: Array<number>;
            /**
             * Import root override.
             * @type {?string}
             * @expose
             */
            importRoot: string;
            /**
             * Namespace.
             * @type {ProtoBuf.Reflect.Namespace}
             * @expose
             */
            ns: any;
            /**
             * Options.
             * @type {!Object.<string, *>}
             * @expose
             */
            options: { [key: string]: any };
            /**
             * Namespace pointer.
             */
            ptr: Reflect.T;
            /**
             * Resolved flag.
             */
            resolved: boolean;
            /**
             * The current building result.
             */
            result: { [key: string]: Message | any };
            /**
             * Tests if a definition most likely describes an enum.
             * @param {!Object} def
             * @returns {boolean}
             * @expose
             */
            static isEnum(def: any): boolean;
            /**
             * Tests if a definition most likely describes an extended message
             * @param {!Object} def
             * @returns {boolean}
             * @expose
             */
            static isExtend(def: any): boolean;
            /**
             * Tests if a definition most likely describes a message.
             * @param {!Object} def
             * @returns {boolean}
             * @expose
             */
            static isMessage(def: any): boolean;
            /**
             * Tests if a definition most likely describes a message field.
             * @param {!Object} def
             * @returns {boolean}
             * @expose
             */
            static isMessageField(def: any): boolean;
            /**
             * Tests if a definition most likely describes a service.
             * @param {!Object} def
             * @returns {boolean}
             * @expose
             */
            static isService(def: any): boolean;
            /**
             * Imports another definition into this builder.
             * @param {Object.<string,*>} json Parsed import
             * @param {(string|{root: string, file: string})=} filename Imported file name
             * @returns {!ProtoBuf.Builder} this
             * @throws {Error} If the definition or file cannot be imported
             * @expose
             */
            import(json: { [key: string]: any }, filename?: string | any): Builder;
            /**
             * Builds the protocol. This will first try to resolve all definitions and, if this has been successful,
             * return the built package.
             * @param {(string|Array.<string>)=} path Specifies what to return. If omitted, the entire namespace will be returned.
             * @returns {!ProtoBuf.Builder.Message|!Object.<string,*>}
             * @throws {Error} If a type could not be resolved
             * @expose
             */
            build(path?: string | Array<string>): Message | { [key: string]: any };
            /**
             * Creates the specified definitions at the current pointer position.
             * @param {!Array.<!Object>} defs Messages, enums or services to create
             * @returns {!ProtoBuf.Builder} this
             * @throws {Error} If a message definition is invalid
             * @expose
             */
            create(defs: Array<any>): Builder;
            /**
             * Defines a namespace on top of the current pointer position and places the pointer on it.
             * @param {string} namespace
             * @return {!ProtoBuf.Builder} this
             * @expose
             */
            define(namespace: string): Builder;
            /**
             * Similar to {@link ProtoBuf.Builder#build}, but looks up the internal reflection descriptor.
             * @param {string=} path Specifies what to return. If omitted, the entire namespace wiil be returned.
             * @param {boolean=} excludeNonNamespace Excludes non-namespace types like fields, defaults to `false`
             * @returns {?ProtoBuf.Reflect.T} Reflection descriptor or `null` if not found
             */
            lookup(path?: string, excludeNonNamespace?: boolean): Reflect.T;
            /**
             * Resets the pointer to the root namespace.
             */
            reset(): Builder;
            /**
             * Resolves all namespace objects.
             */
            resolveAll(): Builder;
            /**
             * Returns a string representation of this object.
             */
            toString(): string;
        }
        class Message {
            /**
             * Constructs a new runtime Message.
             * @name ProtoBuf.Builder.Message
             * @class Barebone of all runtime messages.
             * @param {!Object.<string,*>|string} values Preset values
             * @param {...string} var_args
             * @constructor
             * @throws {Error} If the message cannot be created
             */
            constructor(values: { [key: string]: any } | string, var_args: string);
            /**
             * Message options.
             */
            static $options: { [key: string]: any };
            $options: { [key: string]: any };
            /**
             * Reflection type.
             */
            static $type: Reflect.Message;
            $type: Reflect.Message;
            /**
             * Decodes a message from the specified buffer or string.
             * @name ProtoBuf.Builder.Message.decode
             * @function
             * @param {!ByteBuffer|!ArrayBuffer|!Buffer|string} buffer Buffer to decode from
             * @param {(number|string)=} length Message length. Defaults to decode all the remainig data.
             * @param {string=} enc Encoding if buffer is a string: hex, utf8 (not recommended), defaults to base64
             * @return {!ProtoBuf.Builder.Message} Decoded message
             * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
             *  returns the decoded message with missing fields in the `decoded` property on the error.
             * @expose
             * @see ProtoBuf.Builder.Message.decode64
             * @see ProtoBuf.Builder.Message.decodeHex
             */
            static decode(buffer: ByteBuffer | ArrayBuffer | Buffer | string, length?: number | string, enc?: string): Message;
            /**
             * Decodes the message from the specified base64 encoded string.
             * @name ProtoBuf.Builder.Message.decode64
             * @function
             * @param {string} str String to decode from
             * @return {!ProtoBuf.Builder.Message} Decoded message
             * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
             *  returns the decoded message with missing fields in the `decoded` property on the error.
             * @expose
             */
            static decode64(str: string): Message;
            /**
             * Decodes a varint32 length-delimited message from the specified buffer or string.
             * @name ProtoBuf.Builder.Message.decodeDelimited
             * @function
             * @param {!ByteBuffer|!ArrayBuffer|!Buffer|string} buffer Buffer to decode from
             * @param {string=} enc Encoding if buffer is a string: hex, utf8 (not recommended), defaults to base64
             * @return {ProtoBuf.Builder.Message} Decoded message or `null` if not enough bytes are available yet
             * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
             *  returns the decoded message with missing fields in the `decoded` property on the error.
             * @expose
             */
            static decodeDelimited(buffer: ByteBuffer | ArrayBuffer | Buffer | string, enc?: string): Message;
            /**
             * Decodes the message from the specified hex encoded string.
             * @name ProtoBuf.Builder.Message.decodeHex
             * @function
             * @param {string} str String to decode from
             * @return {!ProtoBuf.Builder.Message} Decoded message
             * @throws {Error} If the message cannot be decoded or if required fields are missing. The later still
             *  returns the decoded message with missing fields in the `decoded` property on the error.
             * @expose
             */
            static decodeHex(str): Message;
            /**
             * Decodes the message from a JSON string.
             * @name ProtoBuf.Builder.Message.decodeJSON
             * @function
             * @param {string} str String to decode from
             * @return {!ProtoBuf.Builder.Message} Decoded message
             * @throws {Error} If the message cannot be decoded or if required fields are
             * missing.
             * @expose
             */
            static decodeJSON(str): Message;
            /**
             * Adds a value to a repeated field.
             */

            $add(key: string, value: any, noAssert?: boolean): Message;
            /**
             * Adds a value to a repeated field. This is an alias for {@link ProtoBuf.Builder.Message#add}.
             * @name ProtoBuf.Builder.Message#$add
             * @function
             * @param {string} key Field name
             * @param {*} value Value to add
             * @param {boolean=} noAssert Whether to assert the value or not (asserts by default)
             * @returns {!ProtoBuf.Builder.Message} this
             * @throws {Error} If the value cannot be added
             * @expose
             */
            add(key: string, value: any, noAssert?: boolean): Message;
            /**
             * Encodes the message.
             * @name ProtoBuf.Builder.Message#$encode
             * @function
             * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
             * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
             * @return {!ByteBuffer} Encoded message as a ByteBuffer
             * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
             *  returns the encoded ByteBuffer in the `encoded` property on the error.
             * @expose
             * @see ProtoBuf.Builder.Message#encode64
             * @see ProtoBuf.Builder.Message#encodeHex
             * @see ProtoBuf.Builder.Message#encodeAB
             */
            $encode(buffer?: ByteBuffer | boolean, noVerify?: boolean): ByteBuffer;
            /**
             * Gets a field's value. This is an alias for ProtoBuf.Builder.Message#$get.
             */
            $get(key: string): any;
            /**
             * Sets a field's value. This is an alias for [@link ProtoBuf.Builder.Message#set}.
             */
            $set(keyOrObj: string | Object, value?: any | boolean, noAssert?: boolean): void;
            /**
             * Calculates the byte length of the message.
             */
            calculate(): number;
            /**
             * Directly encodes the message to a base64 encoded string.
             */
            encode64(): string;
            /**
             * Directly encodes the message to an ArrayBuffer.
             */
            encodeAB(): ArrayBuffer;
            /**
             * Encodes the varint32 length-delimited message.
             * @name ProtoBuf.Builder.Message#encodeDelimited
             * @function
             * @param {(!ByteBuffer|boolean)=} buffer ByteBuffer to encode to. Will create a new one and flip it if omitted.
             * @param {boolean=} noVerify Whether to not verify field values, defaults to `false`
             * @return {!ByteBuffer} Encoded message as a ByteBuffer
             * @throws {Error} If the message cannot be encoded or if required fields are missing. The later still
             *  returns the encoded ByteBuffer in the `encoded` property on the error.
             * @expose
             */
            encodeDelimited(buffer?: ByteBuffer | boolean, noVerify?: boolean): ByteBuffer;
            /**
             * Directly encodes the message to a hex encoded string.
             */
            encodeHex(): string;
            /**
             * Encodes a message to JSON.
             */
            encodeJSON(): string;
            /**
             * Directly encodes the message to a node Buffer.
             */
            encodeNB(): Buffer;
            /**
             * Gets a field's value.
             * @name ProtoBuf.Builder.Message#get
             * @function
             * @param {string} key Key
             * @param {boolean=} noAssert Whether to not assert for an actual field, defaults to `false`
             * @return {*} Value
             * @throws {Error} If there is no such field
             * @expose
             */
            get(key: string, noAssert?: boolean): any;
            /**
             * Sets a field's value.
             * @name ProtoBuf.Builder.Message#set
             * @function
             * @param {string|!Object.<string,*>} keyOrObj String key or plain object holding multiple values
             * @param {(*|boolean)=} value Value to set if key is a string, otherwise omitted
             * @param {boolean=} noAssert Whether to not assert for an actual field / proper value type, defaults to `false`
             * @returns {!ProtoBuf.Builder.Message} this
             * @throws {Error} If the value cannot be set
             * @expose
             */
            set(keyOrObj: string | any, value?: any | boolean, noAssert?: boolean): Message;
            /**
             * Returns the message as an ArrayBuffer. This is an alias for ProtoBuf.Builder.Message#encodeAB.
             */
            toArrayBuffer(): ArrayBuffer;
            /**
             * Returns the message as a base64 encoded string. This is an alias for ProtoBuf.Builder.Message#encode64.
             */
            toBase64(): string;
            /**
             * Returns the message as a node Buffer. This is an alias for ProtoBuf.Builder.Message#encodeNB.
             */
            toBuffer(): Buffer;
            /**
             * Returns the message as a hex encoded string. This is an alias for ProtoBuf.Builder.Message#encodeHex.
             */
            toHex(): string;
            /**
             * Returns the message's raw payload.
             */
            toRaw(binaryAsBase64?: boolean, longsAsStrings?: boolean): { [key: string]: any };
            /**
             * Returns a string representation of this Message.
             */
            toString(): string;
        }
        class Service {
            /**
             * Constructs a new runtime Service.
             * @name ProtoBuf.Builder.Service
             * @param {function(string, ProtoBuf.Builder.Message, function(Error, ProtoBuf.Builder.Message=))=} rpcImpl RPC implementation receiving the method name and the message
             * @class Barebone of all runtime services.
             * @constructor
             * @throws {Error} If the service cannot be created
             */
            constructor(rpcImpl?: Function);
            /**
             * Service implementation.
             */
            rpcImpl: Function;
            /**
             * Service options.
             */
            static $options: any;
            $options: any;
            /**
             * Reflection type.
             */
            static $type: Reflect.Service;
            $type: Reflect.Service;
        }
    }
}
declare class ByteBuffer
{
    /**
     * Constructs a new ByteBuffer.
     */
    constructor( capacity?: number, littleEndian?: boolean, noAssert?: boolean );

    /**
     * Big endian constant that can be used instead of its boolean value. Evaluates to false.
     */
    static BIG_ENDIAN: boolean;

    /**
     * Default initial capacity of 16.
     */
    static DEFAULT_CAPACITY: number;

    /**
     * Default no assertions flag of false.
     */
    static DEFAULT_NOASSERT: boolean;

    /**
     * Little endian constant that can be used instead of its boolean value. Evaluates to true.
     */
    static LITTLE_ENDIAN: boolean;

    /**
     * Maximum number of bytes required to store a 32bit base 128 variable-length integer.
     */
    static MAX_VARINT32_BYTES: number;

    /**
     * Maximum number of bytes required to store a 64bit base 128 variable-length integer.
     */
    static MAX_VARINT64_BYTES: number;

    /**
     * Metrics representing number of bytes.Evaluates to 2.
     */
    static METRICS_BYTES: number;

    /**
     * Metrics representing number of UTF8 characters.Evaluates to 1.
     */
    static METRICS_CHARS: number;

    /**
     * ByteBuffer version.
     */
    static VERSION: string;

    /**
     * Backing buffer.
     */
    buffer: ArrayBuffer;

    /**
     * Absolute limit of the contained data. Set to the backing buffer's capacity upon allocation.
     */
    limit: number;

    /**
     * Whether to use little endian byte order, defaults to false for big endian.
     */
    littleEndian: boolean;

    /**
     * Marked offset.
     */
    markedOffset: number;

    /**
     * Whether to skip assertions of offsets and values, defaults to false.
     */
    noAssert: boolean;

    /**
     * Absolute read/write offset.
     */
    offset: number;

    /**
     * Data view to manipulate the backing buffer. Becomes null if the backing buffer has a capacity of 0.
     */
    view: DataView;    

    /**
     * Allocates a new ByteBuffer backed by a buffer of the specified capacity.
     */
    static allocate( capacity?: number, littleEndian?: number, noAssert?: boolean ): ByteBuffer;

    /**
     * Decodes a base64 encoded string to binary like window.atob does.
     */
    static atob( b64: string ): string;

    /**
     * Encodes a binary string to base64 like window.btoa does.
     */
    static btoa( str: string ): string;

    /**
     * Calculates the number of UTF8 bytes of a string.
     */
    static calculateUTF8Byte( str: string ): number;

    /**
     * Calculates the number of UTF8 characters of a string.JavaScript itself uses UTF- 16, so that a string's length property does not reflect its actual UTF8 size if it contains code points larger than 0xFFFF.
     */
    static calculateUTF8Char( str: string ): number;

    /**
     * Calculates the actual number of bytes required to store a 32bit base 128 variable-length integer.
     */
    static calculateVariant32( value: number ): number;

    /**
     * Calculates the actual number of bytes required to store a 64bit base 128 variable-length integer.
     */
    static calculateVariant64( value: number | Long ): number;

    /**
     * Concatenates multiple ByteBuffers into one.
     */
    static concat( buffers: Array<ByteBuffer | ArrayBuffer | Uint8Array | string>, encoding?: string | boolean, litteEndian?: boolean, noAssert?: boolean ): ByteBuffer;

    /**
     * Decodes a base64 encoded string to a ByteBuffer.
     */
    static fromBase64( str: string, littleEndian?: boolean, noAssert?: boolean ): ByteBuffer;

    /**
     * Decodes a binary encoded string, that is using only characters 0x00-0xFF as bytes, to a ByteBuffer.
     */
    static fromBinary( str: string, littleEndian?: boolean, noAssert?: boolean ): ByteBuffer;

    /**
     * Decodes a hex encoded string with marked offsets to a ByteBuffer.
     */
    static fromDebug( str: string, littleEndian?: boolean, noAssert?: boolean ): ByteBuffer;

    /**
     * Decodes a hex encoded string to a ByteBuffer.
     */
    static fromHex( str: string, littleEndian?: boolean, noAssert?: boolean ): ByteBuffer;

    /**
     * Decodes an UTF8 encoded string to a ByteBuffer.
     */
    static fromUTF8( str: string, littleEndian?: boolean, noAssert?: boolean ): ByteBuffer;

    /**
     * Gets the backing buffer type.
     */
    static isByteBuffer( bb: any ): boolean;

    /**
     * Wraps a buffer or a string. Sets the allocated ByteBuffer's ByteBuffer#offset to 0 and its ByteBuffer#limit to the length of the wrapped data.
     * @param buffer Anything that can be wrapped
     * @param encoding String encoding if buffer is a string ("base64", "hex", "binary", defaults to "utf8")
     * @param littleEndian Whether to use little or big endian byte order. Defaults to ByteBuffer.DEFAULT_ENDIAN.
     * @param noAssert Whether to skip assertions of offsets and values. Defaults to ByteBuffer.DEFAULT_NOASSERT.
     */
    static wrap( buffer: ByteBuffer | ArrayBuffer | Uint8Array | string, enc?: string | boolean, littleEndian?: boolean, noAssert?: boolean ): ByteBuffer;

    /**
     * Decodes a zigzag encoded signed 32bit integer.
     */
    static zigZagDecode32( n: number ): number;

    /**
     * Decodes a zigzag encoded signed 64bit integer.
     */
    static zigZagDecode64( n: number | Long ): Long;

    /**
     * Zigzag encodes a signed 32bit integer so that it can be effectively used with varint encoding.
     */
    static zigZagEncode32( n: number ): number;

    /**
     * Zigzag encodes a signed 64bit integer so that it can be effectively used with varint encoding.
     */
    static zigZagEncode64( n: number | Long ): Long;

    /**
     * Switches (to) big endian byte order.
     */
    BE( bigEndian?: boolean ): ByteBuffer;

    /**
     * Switches (to) little endian byte order.
     */
    LE( bigEndian?: boolean ): ByteBuffer;

    /**
     * Appends some data to this ByteBuffer. This will overwrite any contents behind the specified offset up to the appended data's length.
     */
    append( source: ByteBuffer | ArrayBuffer | Uint8Array | string, encoding?: string | number, offset?: number ): ByteBuffer;

    /**
     * Appends this ByteBuffer's contents to another ByteBuffer. This will overwrite any contents behind the specified offset up to the length of this ByteBuffer's data.
     */
    appendTo( target: ByteBuffer, offset?: number ): ByteBuffer;

    /**
     * Enables or disables assertions of argument types and offsets. Assertions are enabled by default but you can opt to disable them if your code already makes sure that everything is valid.
     */
    assert( assert: boolean ): ByteBuffer;

    /**
     * Gets the capacity of this ByteBuffer's backing buffer.
     */
    capacity(): number;

    /**
     * Clears this ByteBuffer's offsets by setting ByteBuffer#offset to 0 and
     * ByteBuffer#limit to the backing buffer's capacity. Discards ByteBuffer#markedOffset.
     */
    clear(): ByteBuffer;

    /**
     * Creates a cloned instance of this ByteBuffer, preset with this ByteBuffer's values for ByteBuffer#offset, ByteBuffer#markedOffset and ByteBuffer#limit.
     */
    clone( copy?: boolean ): ByteBuffer;

    /**
     * Compacts this ByteBuffer to be backed by a ByteBuffer#buffer of its contents' length. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit. Will set offset = 0 and limit = capacity and adapt ByteBuffer#markedOffset to the same relative position if set.
     */
    compact( begin?: number, end?: number ): ByteBuffer;

    /**
     * Creates a copy of this ByteBuffer's contents. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit.
     */
    copy( begin?: number, end?: number ): ByteBuffer;

    /**
     * Copies this ByteBuffer's contents to another ByteBuffer. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit.
     */
    copyTo( target: ByteBuffer, targetOffset?: number, sourceOffset?: number, sourceLimit?: number ): ByteBuffer;

    /**
     * Makes sure that this ByteBuffer is backed by a ByteBuffer#buffer of at least the specified capacity. If the current capacity is exceeded, it will be doubled. If double the current capacity is less than the required capacity, the required capacity will be used instead.
     */
    ensureCapacity( capacity: number ): ByteBuffer;

    /**
     * Overwrites this ByteBuffer's contents with the specified value. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit.
     */
    fill( value: number | string, begin?: number, end?: number ): ByteBuffer;

    /**
     * Makes this ByteBuffer ready for a new sequence of write or relative read operations. Sets limit = offset and offset = 0. Make sure always to flip a ByteBuffer when all relative read or write operations are complete.
     */
    flip(): ByteBuffer;

    /**
     * Marks an offset on this ByteBuffer to be used later.
     */
    mark( offset?: number ): ByteBuffer;

    /**
     * Sets the byte order.
     */
    order( littleEndian: boolean ): ByteBuffer;

    /**
     * Prepends some data to this ByteBuffer. This will overwrite any contents before the specified offset up to the prepended data's length. If there is not enough space available before the specified offset, the backing buffer will be resized and its contents moved accordingly.
     */
    prepend( source: ByteBuffer | string | ArrayBuffer, encoding?: string | number, offset?: number ): ByteBuffer;

    /**
     * Prepends this ByteBuffer to another ByteBuffer. This will overwrite any contents before the specified offset up to the prepended data's length. If there is not enough space available before the specified offset, the backing buffer will be resized and its contents moved accordingly.
     */
    prependTo( target: ByteBuffer, offset?: number ): ByteBuffer;

    /**
     * Prints debug information about this ByteBuffer's contents.
     */
    printDebug( out?: ( text: string ) => void ): void;

    /**
     * Reads an 8bit signed integer. This is an alias of ByteBuffer#readInt8.
     */
    readByte( offset?: number ): number;

    /**
     * Reads a NULL-terminated UTF8 encoded string. For this to work the string read must not contain any NULL characters itself.
     */
    readCString( offset?: number ): string;

    /**
     * Reads a 64bit float. This is an alias of ByteBuffer#readFloat64.
     */
    readDouble( offset?: number ): number;

    /**
     * Reads a 32bit float. This is an alias of ByteBuffer#readFloat32.
     */
    readFloat( offset?: number ): number;

    /**
     * Reads a 32bit float.
     */
    readFloat32( offset?: number ): number;

    /**
     * Reads a 64bit float.
     */
    readFloat64( offset?: number ): number;

    /**
     * Reads a length as uint32 prefixed UTF8 encoded string.
     */
    readIString( offset?: number ): string;

    /**
     * Reads a 32bit signed integer.This is an alias of ByteBuffer#readInt32.
     */
    readInt( offset?: number ): number;

    /**
     * Reads a 16bit signed integer.
     */
    readInt16( offset?: number ): number;

    /**
     * Reads a 32bit signed integer.
     */
    readInt32( offset?: number ): number;

    /**
     * Reads a 64bit signed integer.
     */
    readInt64( offset?: number ): Long;

    /**
     * Reads an 8bit signed integer.
     */
    readInt8( offset?: number ): number;

    /**
     * Reads a 64bit signed integer. This is an alias of ByteBuffer#readInt64.
     */
    readLong( offset?: number ): Long;

    /**
     * Reads a 16bit signed integer. This is an alias of ByteBuffer#readInt16.
     */
    readShort( offset?: number ): number;

    /**
     * Reads an UTF8 encoded string. This is an alias of ByteBuffer#readUTF8String.
     */
    readString( length: number, metrics?: number, offset?: number ): string;

    /**
     * Reads an UTF8 encoded string.
     */
    readUTF8String( chars: number, offset?: number ): string;

    /**
     * Reads a 16bit unsigned integer.
     */
    readUint16( offset?: number ): number;

    /**
     * Reads a 32bit unsigned integer.
     */
    readUint32( offset?: number ): number;

    /**
     * Reads a 64bit unsigned integer.
     */
    readUint64( offset?: number ): Long;
    /**
     * Reads an 8bit unsigned integer.
     */
    readUint8( offset?: number ): number;

    /**
     * Reads a length as varint32 prefixed UTF8 encoded string.
     */
    readVString( offset?: number ): string;

    /**
     * Reads a 32bit base 128 variable-length integer.
     */
    readVarint32( offset?: number ): number;

    /**
     * Reads a zig-zag encoded 32bit base 128 variable-length integer.
     */
    readVarint32ZiZag( offset?: number ): number;

    /**
     * Reads a 64bit base 128 variable-length integer. Requires Long.js.
     */
    readVarint64( offset?: number ): Long;

    /**
     * Reads a zig-zag encoded 64bit base 128 variable-length integer. Requires Long.js.
     */
    readVarint64ZigZag( offset?: number ): Long;

    /**
     * Gets the number of remaining readable bytes. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit, so this returns limit - offset.
     */
    remaining(): number;

    /**
     * Resets this ByteBuffer's ByteBuffer#offset. If an offset has been marked through ByteBuffer#mark before, offset will be set to ByteBuffer#markedOffset, which will then be discarded. If no offset has been marked, sets offset = 0.
     */
    reset(): ByteBuffer;

    /**
     * Resizes this ByteBuffer to be backed by a buffer of at least the given capacity. Will do nothing if already that large or larger.
     */ 
    resize( capacity: number ): ByteBuffer;

    /**
     * Reverses this ByteBuffer's contents
     */
    reverse( begin?: number, end?: number ): ByteBuffer;

    /**
     * Skips the next length bytes. This will just advance
     */
    skip( length: number ): ByteBuffer;

    /**
     * Slices this ByteBuffer by creating a cloned instance with offset = begin and limit = end.
     */
    slice( begin?: number, end?: number ): ByteBuffer;

    /**
     * Returns a raw buffer compacted to contain this ByteBuffer's contents. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit. Will transparently ByteBuffer#flip this ByteBuffer if offset > limit but the actual offsets remain untouched. This is an alias of ByteBuffer#toBuffer.
     */
    toArrayBuffer( forceCopy?: boolean ): ArrayBuffer;

    /**
     * Encodes this ByteBuffer's contents to a base64 encoded string.
     */
    toBase64( begin?: number, end?: number ): string;

    /**
     * Encodes this ByteBuffer to a binary encoded string, that is using only characters 0x00-0xFF as bytes.
     */
    toBinary( begin?: number, end?: number ): string;

    /**
     * Returns a copy of the backing buffer that contains this ByteBuffer's contents. Contents are the bytes between ByteBuffer#offset and ByteBuffer#limit. Will transparently ByteBuffer#flip this ByteBuffer if offset > limit but the actual offsets remain untouched.
     */
    toBuffer( forceCopy?: boolean ): ArrayBuffer;

    /**
      *Encodes this ByteBuffer to a hex encoded string with marked offsets. Offset symbols are:
     *  < : offset,
     *  ' : markedOffset,
     *  > : limit,
     *  | : offset and limit,
     *  [ : offset and markedOffset,
     *  ] : markedOffset and limit,
     *  ! : offset, markedOffset and limit
     */
    toDebug( columns?: boolean ): string | Array<string>

    /**
     * Encodes this ByteBuffer's contents to a hex encoded string.
     */
    toHex( begin?: number, end?: number ): string;

    /**
     * Converts the ByteBuffer's contents to a string.
     */
    toString( encoding?: string ): string;

    /**
     * Encodes this ByteBuffer's contents between ByteBuffer#offset and ByteBuffer#limit to an UTF8 encoded string.
     */
    toUTF8(): string;

    /**
     * Writes an 8bit signed integer. This is an alias of ByteBuffer#writeInt8.
     */
    writeByte( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a NULL-terminated UTF8 encoded string. For this to work the specified string must not contain any NULL characters itself.
     */
    writeCString( str: string, offset?: number ): ByteBuffer;

    /**
     * Writes a 64bit float. This is an alias of ByteBuffer#writeFloat64.
     */
    writeDouble( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a 32bit float. This is an alias of ByteBuffer#writeFloat32.
     */
    writeFloat( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a 32bit float.
     */
    writeFloat32( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a 64bit float.
     */
    writeFloat64( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a length as uint32 prefixed UTF8 encoded string.
     */
    writeIString( str: string, offset?: number ): ByteBuffer;

    /**
     * Writes a 32bit signed integer. This is an alias of ByteBuffer#writeInt32.
     */
    writeInt( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a 16bit signed integer.
     */
    writeInt16( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a 32bit signed integer.
     */
    writeInt32( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a 64bit signed integer.
     */
    writeInt64( value: number | Long, offset?: number ): ByteBuffer;

    /**
     * Writes an 8bit signed integer.
     */
    writeInt8( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a 16bit signed integer. This is an alias of ByteBuffer#writeInt16.
     */
    writeShort( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes an UTF8 encoded string.This is an alias of ByteBuffer#writeUTF8String.
     */
    WriteString( str: string, offset?: number ): ByteBuffer | number;

    /**
     * Writes an UTF8 encoded string.
     */
    writeUTF8String( str: string, offset?: number ): ByteBuffer | number;

    /**
     * Writes a 16bit unsigned integer.
     */
    writeUint16( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a 32bit unsigned integer.
     */
    writeUint32( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a 64bit unsigned integer.
     */
    writeUint64( value: number | Long, offset?: number ): ByteBuffer;

    /**
     * Writes an 8bit unsigned integer.
     */
    writeUint8( value: number, offset?: number ): ByteBuffer;

    /**
     * Writes a length as varint32 prefixed UTF8 encoded string.
     */
    writeVString( str: string, offset?: number ): ByteBuffer | number;

    /**
     * Writes a 32bit base 128 variable-length integer.
     */
    writeVarint32( value: number, offset?: number ): ByteBuffer | number;

    /**
     * Writes a zig-zag encoded 32bit base 128 variable-length integer.
     */
    writeVarint32ZigZag( value: number, offset?: number ): ByteBuffer | number;

    /**
     * Writes a 64bit base 128 variable-length integer.
     */
    writeVarint64( value: number | Long, offset?: number ): ByteBuffer;

    /**
     * Writes a zig-zag encoded 64bit base 128 variable-length integer.
     */
    writeVarint64ZigZag( value: number | Long, offset?: number ): ByteBuffer | number;
}

declare module 'bytebuffer' {
    export = ByteBuffer;
}
declare class Long
{
    /**
     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as signed integers. See the from* functions below for more convenient ways of constructing Longs.
     */
    constructor( low: number, high?: number, unsigned?: boolean );

    /**
     * Maximum unsigned value.
     */
    static MAX_UNSIGNED_VALUE: Long;

    /**
     * Maximum signed value.
     */
    static MAX_VALUE: Long;

    /**
     * Minimum signed value.
     */
    static MIN_VALUE: Long;

    /**
     * Signed negative one.
     */
    static NEG_ONE: Long;

    /**
     * Signed one.
     */
    static ONE: Long;

    /**
     * Unsigned one.
     */
    static UONE: Long;

    /**
     * Unsigned zero.
     */
    static UZERO: Long;

    /**
     * Signed zero
     */
    static ZERO: Long;

    /**
     * The high 32 bits as a signed value.
     */
    high: number;

    /**
     * The low 32 bits as a signed value.
     */
    low: number;

    /**
     * Whether unsigned or not.
     */
    unsigned: boolean;

    /**
     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is assumed to use 32 bits.
     */
    static fromBits( lowBits:number, highBits:number, unsigned?:boolean ): Long;

    /**
     * Returns a Long representing the given 32 bit integer value.
     */
    static fromInt( value: number, unsigned?: boolean ): Long;

    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     */
    static fromNumber( value: number, unsigned?: boolean ): Long;

    /**
     * Returns a Long representation of the given string, written using the specified radix.
     */
    static fromString( str: string, unsigned?: boolean | number, radix?: number ): Long;

    /**
     * Tests if the specified object is a Long.
     */
    static isLong( obj: any ): boolean;

    /**
     * Converts the specified value to a Long.
     */
    static fromValue( val: Long | number | string | {low: number, high: number, unsigned: boolean} ): Long;

    /**
     * Returns the sum of this and the specified Long.
     */
    add( addend: number | Long | string ): Long;

    /**
     * Returns the bitwise AND of this Long and the specified.
     */
    and( other: Long | number | string ): Long;

    /**
     * Compares this Long's value with the specified's.
     */
    compare( other: Long | number | string ): number;

    /**
     * Compares this Long's value with the specified's.
     */
    comp( other: Long | number | string ): number;

    /**
     * Returns this Long divided by the specified.
     */
    divide( divisor: Long | number | string ): Long;

    /**
     * Returns this Long divided by the specified.
     */
    div( divisor: Long | number | string ): Long;

    /**
     * Tests if this Long's value equals the specified's.
     */
    equals( other: Long | number | string ): boolean;

    /**
     * Tests if this Long's value equals the specified's.
     */
    eq( other: Long | number | string ): boolean;

    /**
     * Gets the high 32 bits as a signed integer.
     */
    getHighBits(): number;

    /**
     * Gets the high 32 bits as an unsigned integer.
     */
    getHighBitsUnsigned(): number;

    /**
     * Gets the low 32 bits as a signed integer.
     */
    getLowBits(): number;

    /**
     * Gets the low 32 bits as an unsigned integer.
     */
    getLowBitsUnsigned(): number;

    /**
     * Gets the number of bits needed to represent the absolute value of this Long.
     */
    getNumBitsAbs(): number;

    /**
     * Tests if this Long's value is greater than the specified's.
     */
    greaterThan( other: Long | number | string ): boolean;

    /**
     * Tests if this Long's value is greater than the specified's.
     */
    gt( other: Long | number | string ): boolean;

    /**
     * Tests if this Long's value is greater than or equal the specified's.
     */
    greaterThanOrEqual( other: Long | number | string ): boolean;

    /**
     * Tests if this Long's value is greater than or equal the specified's.
     */
    gte( other: Long | number | string ): boolean;

    /**
     * Tests if this Long's value is even.
     */
    isEven(): boolean;

    /**
     * Tests if this Long's value is negative.
     */
    isNegative(): boolean;

    /**
     * Tests if this Long's value is odd.
     */
    isOdd(): boolean;

    /**
     * Tests if this Long's value is positive.
     */
    isPositive(): boolean;

    /**
     * Tests if this Long's value equals zero.
     */
    isZero(): boolean;

    /**
     * Tests if this Long's value is less than the specified's.
     */
    lessThan( other: Long | number | string ): boolean;

    /**
     * Tests if this Long's value is less than the specified's.
     */
    lt( other: Long | number | string ): boolean;

    /**
     * Tests if this Long's value is less than or equal the specified's.
     */
    lessThanOrEqual( other: Long | number | string ): boolean;

    /**
     * Tests if this Long's value is less than or equal the specified's.
     */
    lte( other: Long | number | string ): boolean;

    /**
     * Returns this Long modulo the specified.
     */
    modulo( other: Long | number | string ): Long;

    /**
     * Returns this Long modulo the specified.
     */
    mod( other: Long | number | string ): Long;

    /**
     * Returns the product of this and the specified Long.
     */
    multiply( multiplier: Long | number | string ): Long;

    /**
     * Returns the product of this and the specified Long.
     */
    mul( multiplier: Long | number | string ): Long;

    /**
     * Negates this Long's value.
     */
    negate(): Long;

    /**
     * Negates this Long's value.
     */
    neg(): Long;

    /**
     * Returns the bitwise NOT of this Long.
     */
    not(): Long;

    /**
     * Tests if this Long's value differs from the specified's.
     */
    notEquals( other: Long | number | string ): boolean;

    /**
     * Tests if this Long's value differs from the specified's.
     */
    neq( other: Long | number | string ): boolean;

    /**
     * Returns the bitwise OR of this Long and the specified.
     */
    or( other: Long | number | string ): Long;

    /**
     * Returns this Long with bits shifted to the left by the given amount.
     */
    shiftLeft( numBits: number | Long ): Long;

    /**
     * Returns this Long with bits shifted to the left by the given amount.
     */
    shl( numBits: number | Long ): Long;

    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount.
     */
    shiftRight( numBits: number | Long ): Long;

    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount.
     */
    shr( numBits: number | Long ): Long;

    /**
     * Returns this Long with bits logically shifted to the right by the given amount.
     */
    shiftRightUnsigned( numBits: number | Long ): Long;

    /**
     * Returns this Long with bits logically shifted to the right by the given amount.
     */
    shru( numBits: number | Long ): Long;

    /**
     * Returns the difference of this and the specified Long.
     */
    subtract( subtrahend: number | Long | string ): Long;

    /**
     * Returns the difference of this and the specified Long.
     */
    sub( subtrahend: number | Long |string ): Long;

    /**
     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
     */
    toInt(): number;

    /**
     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
     */
    toNumber(): number;

    /**
     * Converts this Long to signed.
     */
    toSigned(): Long;

    /**
     * Converts the Long to a string written in the specified radix.
     */
    toString( radix?: number ): string;

    /**
     * Converts this Long to unsigned.
     */
    toUnsigned(): Long;

    /**
     * Returns the bitwise XOR of this Long and the given one.
     */
    xor( other: Long | number | string ): Long;
}

declare module 'long' {
    export = Long;
}