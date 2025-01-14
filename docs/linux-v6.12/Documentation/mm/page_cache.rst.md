---
sidebar_position: 20
---
# page_cache.rst

### ファイル情報

- パス: `linux-v6.12/Documentation/mm/page_cache.rst`

### コンテンツ

```rst
.. SPDX-License-Identifier: GPL-2.0

==========
Page Cache
==========

The page cache is the primary way that the user and the rest of the kernel
interact with filesystems.  It can be bypassed (e.g. with O_DIRECT),
but normal reads, writes and mmaps go through the page cache.

Folios
======

The folio is the unit of memory management within the page cache.
Operations 

```
