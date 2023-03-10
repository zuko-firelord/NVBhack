// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Post entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Post must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Post", id.toString(), this);
    }
  }

  static load(id: string): Post | null {
    return changetype<Post | null>(store.get("Post", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get body(): string {
    let value = this.get("body");
    return value!.toString();
  }

  set body(value: string) {
    this.set("body", Value.fromString(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value!.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get by(): string {
    let value = this.get("by");
    return value!.toString();
  }

  set by(value: string) {
    this.set("by", Value.fromString(value));
  }

  get tags(): Array<string> {
    let value = this.get("tags");
    return value!.toStringArray();
  }

  set tags(value: Array<string>) {
    this.set("tags", Value.fromStringArray(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }
}

export class Comment extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Comment entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Comment must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Comment", id.toString(), this);
    }
  }

  static load(id: string): Comment | null {
    return changetype<Comment | null>(store.get("Comment", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get Postid(): BigInt {
    let value = this.get("Postid");
    return value!.toBigInt();
  }

  set Postid(value: BigInt) {
    this.set("Postid", Value.fromBigInt(value));
  }

  get comment(): string {
    let value = this.get("comment");
    return value!.toString();
  }

  set comment(value: string) {
    this.set("comment", Value.fromString(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get by(): string {
    let value = this.get("by");
    return value!.toString();
  }

  set by(value: string) {
    this.set("by", Value.fromString(value));
  }
}

export class Answer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Answer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Answer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Answer", id.toString(), this);
    }
  }

  static load(id: string): Answer | null {
    return changetype<Answer | null>(store.get("Answer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get Postid(): BigInt {
    let value = this.get("Postid");
    return value!.toBigInt();
  }

  set Postid(value: BigInt) {
    this.set("Postid", Value.fromBigInt(value));
  }

  get answer(): string {
    let value = this.get("answer");
    return value!.toString();
  }

  set answer(value: string) {
    this.set("answer", Value.fromString(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get by(): string {
    let value = this.get("by");
    return value!.toString();
  }

  set by(value: string) {
    this.set("by", Value.fromString(value));
  }
}
