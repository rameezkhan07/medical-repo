package com.mindtree.orchard.patiententity;

import java.util.List;

public class OutputPatient {
	
	
	private String name;
	
	private List<Visdp> listOfVisit;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	public List<Visdp> getListOfVisit() {
		return listOfVisit;
	}
	public void setListOfVisit(List<Visdp> listOfVisit) {
		this.listOfVisit = listOfVisit;
	}
	public OutputPatient(String name,  List<Visdp> listOfVisit) {
		super();
		this.name = name;
		this.listOfVisit = listOfVisit;
	}
	public OutputPatient() {
		super();
	}
	
	
	
}
