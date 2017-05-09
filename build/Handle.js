"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Generated from Java with JSweet 1.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * A reference to a field or a method.
 *
 * @author Remi Forax
 * @author Eric Bruneton
 */
const Opcodes_1 = require("./Opcodes");
class Handle {
    /**
     * Constructs a new field or method handle.
     *
     * @param tag
     * the kind of field or method designated by this Handle. Must be
     * {@link Opcodes#H_GETFIELD}, {@link Opcodes#H_GETSTATIC},
     * {@link Opcodes#H_PUTFIELD}, {@link Opcodes#H_PUTSTATIC},
     * {@link Opcodes#H_INVOKEVIRTUAL},
     * {@link Opcodes#H_INVOKESTATIC},
     * {@link Opcodes#H_INVOKESPECIAL},
     * {@link Opcodes#H_NEWINVOKESPECIAL} or
     * {@link Opcodes#H_INVOKEINTERFACE}.
     * @param owner
     * the internal name of the class that owns the field or method
     * designated by this handle.
     * @param name
     * the name of the field or method designated by this handle.
     * @param desc
     * the descriptor of the field or method designated by this
     * handle.
     * @param itf
     * true if the owner is an interface.
     */
    constructor(tag, owner, name, desc, itf = tag == Opcodes_1.Opcodes.H_INVOKEINTERFACE) {
        this.tag = tag;
        this.owner = owner;
        this.name = name;
        this.desc = desc;
        this.itf = itf;
    }
    /**
     * Returns the kind of field or method designated by this handle.
     *
     * @return {@link Opcodes#H_GETFIELD}, {@link Opcodes#H_GETSTATIC},
     * {@link Opcodes#H_PUTFIELD}, {@link Opcodes#H_PUTSTATIC},
     * {@link Opcodes#H_INVOKEVIRTUAL}, {@link Opcodes#H_INVOKESTATIC},
     * {@link Opcodes#H_INVOKESPECIAL},
     * {@link Opcodes#H_NEWINVOKESPECIAL} or
     * {@link Opcodes#H_INVOKEINTERFACE}.
     */
    getTag() {
        return this.tag;
    }
    /**
     * Returns the internal name of the class that owns the field or method
     * designated by this handle.
     *
     * @return the internal name of the class that owns the field or method
     * designated by this handle.
     */
    getOwner() {
        return this.owner;
    }
    /**
     * Returns the name of the field or method designated by this handle.
     *
     * @return the name of the field or method designated by this handle.
     */
    getName() {
        return this.name;
    }
    /**
     * Returns the descriptor of the field or method designated by this handle.
     *
     * @return the descriptor of the field or method designated by this handle.
     */
    getDesc() {
        return this.desc;
    }
    /**
     * Returns true if the owner of the field or method designated
     * by this handle is an interface.
     *
     * @return true if the owner of the field or method designated
     * by this handle is an interface.
     */
    isInterface() {
        return this.itf;
    }
    equals(obj) {
        if (obj === this) {
            return true;
        }
        if (!(obj != null && obj instanceof Handle)) {
            return false;
        }
        let h = obj;
        return this.tag === h.tag && this.itf === h.itf && (this.owner === h.owner) && (this.name === h.name) && (this.desc === h.desc);
    }
    hashCode() {
        return this.tag + (this.itf ? 64 : 0) + this.owner.toString() * this.name.toString() * this.desc.toString();
    }
    /**
     * Returns the textual representation of this handle. The textual
     * representation is:
     *
     * <pre>
     * for a reference to a class:
     * owner '.' name desc ' ' '(' tag ')'
     * for a reference to an interface:
     * owner '.' name desc ' ' '(' tag ' ' itf ')'
     * </pre>
     *
     * . As this format is unambiguous, it can be parsed if necessary.
     */
    toString() {
        return this.owner + '.' + this.name + this.desc + " (" + this.tag + (this.itf ? " itf" : "") + ')';
    }
}
exports.Handle = Handle;
Handle["__class"] = "Handle";
