---
sidebar_position: 1163
---
# sem_types.h

### ファイル情報

- パス: `linux-v6.12/include/linux/sem_types.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef _LINUX_SEM_TYPES_H
#define _LINUX_SEM_TYPES_H

struct sem_undo_list;

struct sysv_sem {
#ifdef CONFIG_SYSVIPC
	struct sem_undo_list *undo_list;
#endif
};

#endif /* _LINUX_SEM_TYPES_H */

```
