---
sidebar_position: 10
---
# archinsn.h

### ファイル情報

- パス: `linux-v6.12/tools/perf/util/archinsn.h`

### コンテンツ

```h
#ifndef INSN_H
#define INSN_H 1

struct perf_sample;
struct machine;
struct thread;

void arch_fetch_insn(struct perf_sample *sample,
		     struct thread *thread,
		     struct machine *machine);

#endif

```
