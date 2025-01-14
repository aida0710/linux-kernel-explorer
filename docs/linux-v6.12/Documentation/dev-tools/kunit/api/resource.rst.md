---
sidebar_position: 6
---
# resource.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/dev-tools/kunit/api/resource.rst`

### コンテンツ

```rst
.. SPDX-License-Identifier: GPL-2.0

============
Resource API
============

This file documents the KUnit resource API.

Most users won't need to use this API directly, power users can use it to store
state on a per-test basis, register custom cleanup actions, and more.

.. kernel-doc:: include/kunit/resource.h
   :internal:

Managed Devices
---------------

Functions for using KUnit-managed struct device and struct device_driver.
Include ``kunit/device.h`` to use these.

.. kernel-doc:: include/kunit/device.h
   :internal:

```
