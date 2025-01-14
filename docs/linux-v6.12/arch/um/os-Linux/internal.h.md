---
sidebar_position: 5
---
# internal.h

### ファイル情報

- パス: `linux-v6.12/arch/um/os-Linux/internal.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __UM_OS_LINUX_INTERNAL_H
#define __UM_OS_LINUX_INTERNAL_H

/*
 * elf_aux.c
 */
void scan_elf_aux(char **envp);

/*
 * mem.c
 */
void check_tmpexec(void);

/*
 * skas/process.c
 */
void wait_stub_done(int pid);

#endif /* __UM_OS_LINUX_INTERNAL_H */

```
