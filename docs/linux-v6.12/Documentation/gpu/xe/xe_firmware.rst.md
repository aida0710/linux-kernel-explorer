---
sidebar_position: 5
---
# xe_firmware.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/gpu/xe/xe_firmware.rst`

### コンテンツ

```rst
.. SPDX-License-Identifier: (GPL-2.0+ OR MIT)

========
Firmware
========

Firmware Layout
===============

.. kernel-doc:: drivers/gpu/drm/xe/xe_uc_fw_abi.h
   :doc: CSS-based Firmware Layout

.. kernel-doc:: drivers/gpu/drm/xe/xe_uc_fw_abi.h
   :doc: GSC-based Firmware Layout

Write Once Protected Content Memory (WOPCM) Layout
==================================================

.. kernel-doc:: drivers/gpu/drm/xe/xe_wopcm.c
   :doc: Write Once Protected Content Memory (WOPCM) Layout

GuC CTB Blob
============

.. kernel-doc:: drivers/gpu/drm/xe/xe_guc_ct.c
   :doc: GuC CTB Blob

GuC Power Conservation (PC)
===========================

.. kernel-doc:: drivers/gpu/drm/xe/xe_guc_pc.c
   :doc: GuC Power Conservation (PC)

Internal API
============

TODO

```
