interface Report {
  bitEditObjects: any
  intLmTime: number
  intLockTime: number
  intModuleNr: number
  intPublic: number
  intRecordDeleted: number
  intRecordStatus: number
  intSort: number
  longCreateDate: string
  strDescription: string
  strLmUser: string
  strLockId: string
  strOwner: string
  strPrevId: string
  strRecordClass: string
  strSystemid: string
  strTargetobject: string
  strTitle: string
}

interface ReportList {
  elementsPerPage: number
  reports: Array<Report>
  totalCount: number
}

export { Report, ReportList }