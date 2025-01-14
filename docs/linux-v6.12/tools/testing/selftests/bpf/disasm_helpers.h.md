---
sidebar_position: 36
---
# disasm_helpers.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/disasm_helpers.h`

### コンテンツ

```h
/* SPDX-License-Identifier: (LGPL-2.1 OR BSD-2-Clause) */

#ifndef __DISASM_HELPERS_H
#define __DISASM_HELPERS_H

#include <stdlib.h>

struct bpf_insn;

struct bpf_insn *disasm_insn(struct bpf_insn *insn, char *buf, size_t buf_sz);

#endif /* __DISASM_HELPERS_H */

```
