---
sidebar_position: 40
---
# mmap.h

### ファイル情報

- パス: `linux-v6.12/fs/ocfs2/mmap.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef OCFS2_MMAP_H
#define OCFS2_MMAP_H

int ocfs2_mmap(struct file *file, struct vm_area_struct *vma);

#endif  /* OCFS2_MMAP_H */

```
