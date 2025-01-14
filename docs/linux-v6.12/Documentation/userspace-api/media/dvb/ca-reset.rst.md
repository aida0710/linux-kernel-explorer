---
sidebar_position: 7
---
# ca-reset.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/userspace-api/media/dvb/ca-reset.rst`

### コンテンツ

```rst
.. SPDX-License-Identifier: GFDL-1.1-no-invariants-or-later
.. c:namespace:: DTV.ca

.. _CA_RESET:

========
CA_RESET
========

Name
----

CA_RESET

Synopsis
--------

.. c:macro:: CA_RESET

``int ioctl(fd, CA_RESET)``

Arguments
---------

``fd``
  File descriptor returned by a previous call to :c:func:`open()`.

Description
-----------

Puts the Conditional Access hardware on its initial state. It should
be called before start using the CA hardware.

Return Value
------------

On success 0 is returned.

On error -1 is returned, and the ``errno`` variable is set
appropriately.

Generic error codes are described at the
:ref:`Generic Error Codes <gen-errors>` chapter.

```
