---
sidebar_position: 6
---
# idle_monitors.def

### ファイル情報

- パス: `linux-v6.12/tools/power/cpupower/utils/idle_monitor/idle_monitors.def`

### コンテンツ

```def
#if defined(__i386__) || defined(__x86_64__)
DEF(amd_fam14h)
DEF(intel_nhm)
DEF(intel_snb)
DEF(intel_hsw_ext)
DEF(mperf)
DEF(rapl)
#endif
DEF(cpuidle_sysfs)

```
