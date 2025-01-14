---
sidebar_position: 1
---
# Build

### ファイル情報

- パス: `linux-v6.12/tools/perf/arch/x86/Build`

### コンテンツ

```txt
perf-util-y += util/
perf-test-y += tests/

ifdef SHELLCHECK
  SHELL_TESTS := entry/syscalls/syscalltbl.sh
  TEST_LOGS := $(SHELL_TESTS:%=%.shellcheck_log)
else
  SHELL_TESTS :=
  TEST_LOGS :=
endif

$(OUTPUT)%.shellcheck_log: %
	$(call rule_mkdir)
	$(Q)$(call echo-cmd,test)shellcheck -a -S warning "$<" > $@ || (cat $@ && rm $@ && false)

perf-test-y += $(TEST_LOGS)

```
