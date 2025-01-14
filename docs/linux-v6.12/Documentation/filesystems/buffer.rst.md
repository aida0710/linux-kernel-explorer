---
sidebar_position: 12
---
# buffer.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/filesystems/buffer.rst`

### コンテンツ

```rst
Buffer Heads
============

Linux uses buffer heads to maintain state about individual filesystem blocks.
Buffer heads are deprecated and new filesystems should use iomap instead.

Functions
---------

.. kernel-doc:: include/linux/buffer_head.h
.. kernel-doc:: fs/buffer.c
   :export:

```
