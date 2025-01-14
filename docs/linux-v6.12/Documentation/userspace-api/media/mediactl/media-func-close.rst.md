---
sidebar_position: 4
---
# media-func-close.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/userspace-api/media/mediactl/media-func-close.rst`

### コンテンツ

```rst
.. SPDX-License-Identifier: GFDL-1.1-no-invariants-or-later
.. c:namespace:: MC

.. _media-func-close:

*************
media close()
*************

Name
====

media-close - Close a media device

Synopsis
========

.. code-block:: c

    #include <unistd.h>

.. c:function:: int close( int fd )

Arguments
=========

``fd``
    File descriptor returned by :c:func:`open()`.

Description
===========

Closes the media device. Resources associated with the file descriptor
are freed. The device configuration remain unchanged.

Return Value
============

:c:func:`close()` returns 0 on success. On error, -1 is returned, and
``errno`` is set appropriately. Possible error codes are:

EBADF
    ``fd`` is not a valid open file descriptor.

```
