---
sidebar_position: 1
---
# address-translation.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/admin-guide/RAS/address-translation.rst`

### コンテンツ

```rst
.. SPDX-License-Identifier: GPL-2.0

Address translation
===================

x86 AMD
-------

Zen-based AMD systems include a Data Fabric that manages the layout of
physical memory. Devices attached to the Fabric, like memory controllers,
I/O, etc., may not have a complete view of the system physical memory map.
These devices may provide a "normalized", i.e. device physical, address
when reporting memory errors. Normalized addresses must be translated to
a system physical address for the kernel to action on the memory.

AMD Address Translation Library (CONFIG_AMD_ATL) provides translation for
this case.

Glossary of acronyms used in address translation for Zen-based systems

* CCM               = Cache Coherent Moderator
* COD               = Cluster-on-Die
* COH_ST            = Coherent Station
* DF                = Data Fabric

```
