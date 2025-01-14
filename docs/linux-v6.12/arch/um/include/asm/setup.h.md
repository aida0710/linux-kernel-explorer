---
sidebar_position: 31
---
# setup.h

### ファイル情報

- パス: `linux-v6.12/arch/um/include/asm/setup.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef SETUP_H_INCLUDED
#define SETUP_H_INCLUDED

/* POSIX mandated with _POSIX_ARG_MAX that we can rely on 4096 chars in the
 * command line, so this choice is ok.
 */

#define COMMAND_LINE_SIZE 4096

#endif		/* SETUP_H_INCLUDED */

```
